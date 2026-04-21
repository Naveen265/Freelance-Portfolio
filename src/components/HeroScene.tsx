import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    function resize() {
      const w = container!.clientWidth
      const h = container!.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(container)

    scene.add(new THREE.AmbientLight(0xffffff, 0.3))
    const key = new THREE.DirectionalLight(0xffffff, 1.2)
    key.position.set(3, 4, 5); scene.add(key)
    const rim = new THREE.DirectionalLight(0xff4d2e, 2.0)
    rim.position.set(-4, 2, -3); scene.add(rim)
    const rim2 = new THREE.DirectionalLight(0x7c5cff, 1.5)
    rim2.position.set(4, -2, -3); scene.add(rim2)

    const uniforms = {
      uTime:     { value: 0 },
      uIntensity:{ value: 0.8 },
      uAccent:   { value: new THREE.Color(0xff4d2e) },
      uAccent2:  { value: new THREE.Color(0x7c5cff) },
    }

    const vertex = /* glsl */`
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying float vDistort;
      uniform float uTime;
      uniform float uIntensity;

      vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
      vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
      vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
      float snoise(vec3 v){
        const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
        vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
        vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
        vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
        i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
        float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;
        vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
        vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
        vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
        vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
        vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
        vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
        vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
        p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
        vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
        return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
      }

      void main(){
        vNormal=normalize(normalMatrix*normal);
        float n=snoise(position*1.2+uTime*.25);
        float n2=snoise(position*2.5+uTime*.1)*.3;
        float distort=(n+n2)*uIntensity;
        vDistort=distort;
        vec3 newPos=position+normal*distort*.35;
        vPosition=newPos;
        gl_Position=projectionMatrix*modelViewMatrix*vec4(newPos,1.);
      }
    `

    const fragment = /* glsl */`
      varying vec3 vNormal;
      varying vec3 vPosition;
      varying float vDistort;
      uniform vec3 uAccent;
      uniform vec3 uAccent2;
      uniform float uTime;

      void main(){
        vec3 n=normalize(vNormal);
        vec3 viewDir=normalize(-vPosition);
        float fres=pow(1.-max(dot(n,viewDir),0.),2.);
        vec3 base=mix(vec3(.04,.04,.05),vec3(.08,.08,.1),n.y*.5+.5);
        float mixT=n.x*.5+.5+sin(uTime*.5)*.1;
        vec3 acc=mix(uAccent,uAccent2,mixT);
        vec3 color=mix(base,acc,fres*.9);
        color+=acc*pow(max(vDistort+.5,0.),2.)*.15;
        gl_FragColor=vec4(color,1.);
      }
    `

    const mat  = new THREE.ShaderMaterial({ uniforms, vertexShader: vertex, fragmentShader: fragment })
    const mesh = new THREE.Mesh(new THREE.TorusKnotGeometry(0.95, 0.32, 220, 32), mat)
    scene.add(mesh)

    let targetRX = 0, targetRY = 0, curRX = 0, curRY = 0
    const onMouseMove = (e: MouseEvent) => {
      targetRY = (e.clientX / window.innerWidth  - 0.5) * 0.6
      targetRX = (e.clientY / window.innerHeight - 0.5) * 0.6
    }
    window.addEventListener('mousemove', onMouseMove)

    let rafId: number
    function animate() {
      rafId = requestAnimationFrame(animate)
      uniforms.uTime.value += 0.01
      const css = getComputedStyle(document.documentElement)
      uniforms.uAccent.value.set(css.getPropertyValue('--accent').trim() as unknown as THREE.ColorRepresentation)
      uniforms.uAccent2.value.set(css.getPropertyValue('--accent-2').trim() as unknown as THREE.ColorRepresentation)
      mesh.rotation.y += 0.003
      mesh.rotation.x += 0.0015
      curRX += (targetRX - curRX) * 0.05
      curRY += (targetRY - curRY) * 0.05
      camera.position.x = curRY * 0.6
      camera.position.y = -curRX * 0.4
      camera.lookAt(0, 0, 0)
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      window.removeEventListener('mousemove', onMouseMove)
      renderer.dispose()
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}
    />
  )
}
