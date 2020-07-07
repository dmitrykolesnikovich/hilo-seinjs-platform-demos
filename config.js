/**
 * @File   : config.js
 * @Author :dtysky (dtysky@outlook.com)
 * @Date   : 7/28/2019, 9:02:26 PM
 * @Description:
 */
module.exports = [
  {
    id: 'start',
    name: '开始',
    list: [
      {
        id: 'start',
        name: '开始',
        pathFromHomepage: '../Sein.js/demo/pages/example/Start/StartPure/main.ts'
      }
    ]
  },
  {
    id: 'core',
    name: '核心基础',
    list: [
      {
        id: 'actor-component',
        name: '角色与组件',
        pathFromHomepage: '../Sein.js/demo/pages/example/Core/ActorComponent/MainScript.ts'
      },
      {
        id: 'scene-component-compose',
        name: '场景组件组合',
        pathFromHomepage: '../Sein.js/demo/pages/example/Core/SceneComponentCompose/MainScript.ts'
      },
      {
        id: 'life-cycle',
        name: '生命周期',
        pathFromHomepage: '../Sein.js/demo/pages/example/Core/LifeCycle/main.ts'
      },
      {
        id: 'unlink-relink',
        name: 'UnLink与ReLink',
        pathFromHomepage: '../Sein.js/demo/pages/example/Core/UnlinkRelink/MainScript.ts'
      },
      {
        id: 'error-chain',
        name: '异常链',
        pathFromHomepage: '../Sein.js/demo/pages/example/Core/ErrorChain/main.ts'
      },
      {
        id: 'timer',
        name: '定时器',
        pathFromHomepage: '../Sein.js/demo/pages/example/Core/Timer/MainScript.ts'
      }
    ]
  },
  {
    id: 'dispatch',
    name: '场景调度',
    list: [
      {
        id: 'single-level',
        name: '单关卡游戏',
        pathFromHomepage: '../Sein.js/demo/pages/example/Dispatch/SingleLevel/main.ts'
      },
      {
        id: 'multiple-level',
        name: '多关卡游戏',
        pathFromHomepage: '../Sein.js/demo/pages/example/Dispatch/MultipleLevel/main.ts'
      },
      {
        id: 'multiple-world',
        name: '多世界游戏',
        pathFromHomepage: '../Sein.js/demo/pages/example/Dispatch/MultipleWorld/main.ts'
      }
    ]
  },
  {
    id: 'render',
    name: '渲染',
    list: [
      {
        id: 'layers',
        name: '图层',
        pathFromHomepage: '../Sein.js/demo/pages/example/Render/Layers/MainScript.ts'
      },
      {
        id: '2d-sprite',
        name: '2D精灵',
        pathFromHomepage: '../Sein.js/demo/pages/example/Render/Sprite/MainScript.ts'
      },
      {
        id: 'render-order',
        name: '渲染顺序',
        pathFromHomepage: '../Sein.js/demo/pages/example/Render/RenderOrder/MainScript.ts'
      },
      {
        id: 'fog',
        name: '雾',
        pathFromHomepage: '../Sein.js/demo/pages/example/Render/Fog/main.ts'
      },
      {
        id: 'advance',
        name: '进阶渲染',
        pathFromHomepage: '../Sein.js/demo/pages/example/Render/Advance/MainScript.ts'
      },
      {
        id: 'refraction',
        name: 'PBR折射',
        pathFromHomepage: '../Sein.js/demo/pages/example/Render/Refraction/MainScript.ts'
      }
    ]
  },
  {
    id: 'material',
    name: '材质系统',
    list: [
      {
        id: 'pbr-material',
        name: 'PBR材质',
        pathFromHomepage: '../Sein.js/demo/pages/example/Material/PbrMaterial/MainScript.ts'
      },
      {
        id: 'shader-material',
        name: 'Shader材质',
        pathFromHomepage: '../Sein.js/demo/pages/example/Material/ShaderMaterial/MainScript.ts'
      },
      {
        id: 'raw-shader-material',
        name: 'RawShader材质',
        pathFromHomepage: '../Sein.js/demo/pages/example/Material/RawShaderMaterial/MainScript.ts'
      },
      {
        id: 'shader-chunk',
        name: 'Shader块',
        pathFromHomepage: '../Sein.js/demo/pages/example/Material/ShaderChunk/MainScript.ts'
      },
      {
        id: 'material-extension',
        name: '材质扩展',
        pathFromHomepage: '../Sein.js/demo/pages/example/Material/MaterialExtension/MainScript.ts'
      },
      {
        id: 'khr-technique-webgl',
        name: 'KHRTechnique扩展',
        pathFromHomepage: '../Sein.js/demo/pages/example/Material/KhrTechniqueWebgl/MainScript.ts'
      },
      {
        id: 'global-uniform-material',
        name: '自定义全局Uniform',
        pathFromHomepage: '../Sein.js/demo/pages/example/Material/GlobalUniformMaterial/MainScript.ts'
      },
      {
        id: 'custom-semantic',
        name: '自定义Semantic',
        pathFromHomepage: '../Sein.js/demo/pages/example/Material/CustomSemantic/MainScript.ts'
      },
      {
        id: 'render-options',
        name: '修改渲染配置',
        pathFromHomepage: '../Sein.js/demo/pages/example/Material/RenderOptions/MainScript.ts'
      }
    ]
  },
  {
    id: 'atlas',
    name: '图集',
    list: [
      {
        id: 'basic',
        name: '基础',
        pathFromHomepage: '../Sein.js/demo/pages/example/Atlas/Basic/MainScript.ts'
      },
      {
        id: 'from-grid',
        name: '通过格子创建',
        pathFromHomepage: '../Sein.js/demo/pages/example/Atlas/FromGrid/MainScript.ts'
      },
      {
        id: 'from-texture',
        name: '通过纹理创建',
        pathFromHomepage: '../Sein.js/demo/pages/example/Atlas/FromTexture/MainScript.ts'
      },
      {
        id: 'allocate-release',
        name: '动态分配释放',
        pathFromHomepage: '../Sein.js/demo/pages/example/Atlas/AllocateRelease/MainScript.ts'
      }
    ]
  },
  {
    id: 'camera',
    name: '摄像机',
    list: [
      {
        id: 'perspective-camera',
        name: '透视摄像机',
        pathFromHomepage: '../Sein.js/demo/pages/example/Camera/PerspectiveCamera/MainScript.ts'
      },
      {
        id: 'orthographic-camera',
        name: '正交摄像机',
        pathFromHomepage: '../Sein.js/demo/pages/example/Camera/OrthographicCamera/MainScript.ts'
      },
      {
        id: 'actor-observe-control',
        name: 'Actor观察控制器',
        pathFromHomepage: '../Sein.js/demo/pages/example/Camera/ActorObserveControl/MainScript.ts'
      },
      {
        id: 'camera-orbit-control',
        name: '绕轨相机控制器',
        pathFromHomepage: '../Sein.js/demo/pages/example/Camera/CameraOrbitControl/MainScript.ts'
      },
      {
        id: 'camera-free-control',
        name: '自由相机控制器',
        pathFromHomepage: '../Sein.js/demo/pages/example/Camera/CameraFreeControl/MainScript.ts'
      }
    ]
  },
  {
    id: 'light',
    name: '灯光',
    list: [
      {
        id: 'ambient-light',
        name: '环境光',
        pathFromHomepage: '../Sein.js/demo/pages/example/Light/AmbientLight/MainScript.ts'
      },
      {
        id: 'directional-light',
        name: '平行光',
        pathFromHomepage: '../Sein.js/demo/pages/example/Light/DirectionalLight/MainScript.ts'
      },
      {
        id: 'point-light',
        name: '点光',
        pathFromHomepage: '../Sein.js/demo/pages/example/Light/PointLight/MainScript.ts'
      },
      {
        id: 'spot-light',
        name: '聚光',
        pathFromHomepage: '../Sein.js/demo/pages/example/Light/SpotLight/MainScript.ts'
      },
      {
        id: 'shadow',
        name: '实时阴影',
        pathFromHomepage: '../Sein.js/demo/pages/example/Light/Shadow/MainScript.ts'
      },
      {
        id: 'baking',
        name: '烘焙',
        pathFromHomepage: '../Sein.js/demo/pages/example/Light/Baking/MainScript.ts'
      }
    ]
  },
  {
    id: 'bsp',
    name: '基础几何体',
    list: [
      {
        id: 'box',
        name: '立方体',
        pathFromHomepage: '../Sein.js/demo/pages/example/Bsp/Box/MainScript.ts'
      },
      {
        id: 'sphere',
        name: '球体',
        pathFromHomepage: '../Sein.js/demo/pages/example/Bsp/Sphere/MainScript.ts'
      },
      {
        id: 'plane',
        name: '平面',
        pathFromHomepage: '../Sein.js/demo/pages/example/Bsp/Plane/MainScript.ts'
      },
      {
        id: 'cylinder',
        name: '圆柱体',
        pathFromHomepage: '../Sein.js/demo/pages/example/Bsp/Cylinder/MainScript.ts'
      },
      {
        id: 'morph',
        name: '变形体',
        pathFromHomepage: '../Sein.js/demo/pages/example/Bsp/Morph/MainScript.ts'
      }
    ]
  },
  {
    id: 'event',
    name: '事件系统',
    list: [
      {
        id: 'basic',
        name: '基础',
        pathFromHomepage: '../Sein.js/demo/pages/example/Event/Basic/MainScript.ts'
      },
      {
        id: 'custom-trigger',
        name: '自定义触发器',
        pathFromHomepage: '../Sein.js/demo/pages/example/Event/CustomTrigger/MainScript.ts'
      },
      {
        id: 'global',
        name: '全局事件',
        pathFromHomepage: '../Sein.js/demo/pages/example/Event/Global/main.ts'
      }
    ]
  },
  {
    id: 'hid',
    name: '人体接口设备',
    list: [
      {
        id: 'touch',
        name: '触摸',
        pathFromHomepage: '../Sein.js/demo/pages/example/Hid/Touch/MainScript.ts'
      }
    ]
  },
  {
    id: 'resource',
    name: '资源管理',
    list: [
      {
        id: 'image-loader',
        name: '图片加载器',
        pathFromHomepage: '../Sein.js/demo/pages/example/Resource/ImageLoader/MainScript.ts'
      },
      {
        id: 'texture-loader',
        name: '纹理加载器',
        pathFromHomepage: '../Sein.js/demo/pages/example/Resource/TextureLoader/MainScript.ts'
      },
      {
        id: 'cube-texture-loader',
        name: '立方体纹理加载器',
        pathFromHomepage: '../Sein.js/demo/pages/example/Resource/CubeTextureLoader/MainScript.ts'
      },
      {
        id: 'atlas-loader',
        name: '图集加载器',
        pathFromHomepage: '../Sein.js/demo/pages/example/Resource/AtlasLoader/MainScript.ts'
      },
      {
        id: 'gltf-loader',
        name: 'GlTF加载器',
        pathFromHomepage: '../Sein.js/demo/pages/example/Resource/GltfLoader/MainScript.ts'
      },
      {
        id: 'free-load',
        name: '自由加载',
        pathFromHomepage: '../Sein.js/demo/pages/example/Resource/FreeLoad/MainScript.ts'
      },
      {
        id: 'glb-load',
        name: 'GLB模型加载',
        pathFromHomepage: '../Sein.js/demo/pages/example/Resource/GlbLoad/MainScript.ts'
      },
      {
        id: 'cancel',
        name: '取消加载',
        pathFromHomepage: '../Sein.js/demo/pages/example/Resource/Cancel/MainScript.ts'
      },
      {
        id: 'gltf-morph',
        name: 'GlTF变形体',
        pathFromHomepage: '../Sein.js/demo/pages/example/Resource/GltfMorph/MainScript.ts'
      },
      {
        id: 'gltf-skeletal',
        name: 'GlTF骨骼',
        pathFromHomepage: '../Sein.js/demo/pages/example/Resource/GltfSkeletal/MainScript.ts'
      }
    ]
  },
  {
    id: 'animation',
    name: '动画系统',
    list: [
      {
        id: '2d-sprite',
        name: '2D精灵',
        pathFromHomepage: '../Sein.js/demo/pages/example/Animation/sprite/MainScript.ts'
      },
      {
        id: 'model',
        name: '模型动画',
        pathFromHomepage: '../Sein.js/demo/pages/example/Animation/Model/MainScript.ts'
      },
      {
        id: 'tween',
        name: 'Tween动画',
        pathFromHomepage: '../Sein.js/demo/pages/example/Animation/Tween/MainScript.ts'
      },
      {
        id: 'custom',
        name: '自定义动画',
        pathFromHomepage: '../Sein.js/demo/pages/example/Animation/Custom/MainScript.ts'
      },
      {
        id: 'events',
        name: '事件',
        pathFromHomepage: '../Sein.js/demo/pages/example/Animation/Events/MainScript.ts'
      },
      {
        id: 'combination',
        name: '动画组合',
        pathFromHomepage: '../Sein.js/demo/pages/example/Animation/Combination/MainScript.ts'
      }
    ]
  },
  {
    id: 'physic',
    name: '物理系统',
    list: [
      {
        id: 'base',
        name: '基础',
        pathFromHomepage: '../Sein.js/demo/pages/example/Physic/Base/MainScript.ts'
      },
      {
        id: 'collision-events',
        name: '碰撞事件',
        pathFromHomepage: '../Sein.js/demo/pages/example/Physic/CollisionEvents/MainScript.ts'
      },
      {
        id: 'pick',
        name: '拾取',
        pathFromHomepage: '../Sein.js/demo/pages/example/Physic/Pick/MainScript.ts'
      },
      {
        id: 'disable',
        name: '停止运作',
        pathFromHomepage: '../Sein.js/demo/pages/example/Physic/Disable/MainScript.ts'
      }
    ]
  },
  {
    id: 'tiny-program-hud',
    name: '小程序HUD',
    only: ['my-tiny-program'],
    list: [
      {
        id: 'basic',
        name: '基础',
        pathFromHomepage: 'null'
      },
      // {
      //   id: 'ui',
      //   name: 'UI',
      //   pathFromHomepage: 'null'
      // },
    ]
  },
  {
    id: 'player',
    name: '玩家系统',
    list: [
      // {
      //   id: 'basic',
      //   name: '基础',
      //   pathFromHomepage: '../Sein.js/demo/pages/example/Player/Basic/MainScript.ts'
      // },
      {
        id: 'ai',
        name: 'AI',
        pathFromHomepage: '../Sein.js/demo/pages/example/Player/Ai/MainScript.ts'
      },
      {
        id: 'player',
        name: '自定义玩家',
        pathFromHomepage: '../Sein.js/demo/pages/example/Player/Player/main.ts'
      }
    ]
  },
  {
    id: 'audio',
    name: '音频系统',
    list: [
      // {
      //   id: 'basic',
      //   name: '基础',
      //   pathFromHomepage: '../Sein.js/demo/pages/example/Audio/Basic/MainScript.ts'
      // },
      // {
      //   id: 'mode',
      //   name: '音频模式',
      //   pathFromHomepage: '../Sein.js/demo/pages/example/Audio/Mode/MainScript.ts'
      // },
      // {
      //   id: 'lazy',
      //   name: '惰性加载',
      //   pathFromHomepage: '../Sein.js/demo/pages/example/Audio/Lazy/MainScript.ts'
      // },
      // {
      //   id: 'space',
      //   name: '空间音频',
      //   pathFromHomepage: '../Sein.js/demo/pages/example/Audio/Space/MainScript.ts'
      // },
      // {
      //   id: 'bgm',
      //   name: '背景音乐',
      //   pathFromHomepage: '../Sein.js/demo/pages/example/Audio/Bgm/MainScript.ts'
      // },
      // {
      //   id: 'volume',
      //   name: '音量控制',
      //   pathFromHomepage: '../Sein.js/demo/pages/example/Audio/Volume/MainScript.ts'
      // },
      // {
      //   id: 'control',
      //   name: '播放控制',
      //   pathFromHomepage: '../Sein.js/demo/pages/example/Audio/Control/MainScript.ts'
      // },
      // {
      //   id: 'multi-listener',
      //   name: '多个监听器',
      //   pathFromHomepage: '../Sein.js/demo/pages/example/Audio/MultiListener/MainScript.ts'
      // },
      // {
      //   id: 'multi-system',
      //   name: '多个系统',
      //   pathFromHomepage: '../Sein.js/demo/pages/example/Audio/MultiSystem/MainScript.ts'
      // },
      // {
      //   id: 'gltf',
      //   name: 'GlTF',
      //   pathFromHomepage: '../Sein.js/demo/pages/example/Audio/Gltf/MainScript.ts'
      // }
    ]
  },
  {
    id: 'gpu-particle-system',
    name: 'GPU粒子系统',
    list: [
      {
        id: 'edge-emitter',
        name: '边界发射器',
        pathFromHomepage: '../Sein.js/demo/pages/example/GpuParticleSystem/EdgeEmitter/MainScript.ts'
      },
      {
        id: 'atlas',
        name: '图集',
        pathFromHomepage: '../Sein.js/demo/pages/example/GpuParticleSystem/Atlas/MainScript.ts'
      },
      {
        id: 'wind-emitter',
        name: '风场发射器',
        pathFromHomepage: '../Sein.js/demo/pages/example/GpuParticleSystem/WindEmitter/MainScript.ts'
      },
      {
        id: 'sphere-emitter',
        name: '球体发射器',
        pathFromHomepage: '../Sein.js/demo/pages/example/GpuParticleSystem/SphereEmitter/MainScript.ts'
      },
      {
        id: 'hemispheric-emitter',
        name: '半球发射器',
        pathFromHomepage: '../Sein.js/demo/pages/example/GpuParticleSystem/HemisphericEmitter/MainScript.ts'
      },
      {
        id: 'custom-trajectory',
        name: '自定义轨迹',
        pathFromHomepage: '../Sein.js/demo/pages/example/GpuParticleSystem/CustomTrajectory/MainScript.ts'
      }
    ]
  },
  {
    id: 'post-processing-system',
    name: '后处理系统',
    list: [
      {
        id: 'threshold',
        name: '全局阈值化',
        pathFromHomepage: '../Sein.js/demo/pages/example/PostProcessing/Threshold/MainScript.ts'
      },
      {
        id: 'local-threshold',
        name: '局部阈值化',
        pathFromHomepage: '../Sein.js/demo/pages/example/PostProcessing/LocalThreshold/MainScript.ts'
      },
      {
        id: 'bloom',
        name: '泛光',
        pathFromHomepage: '../Sein.js/demo/pages/example/PostProcessing/Bloom/MainScript.ts'
      }
    ]
  },
  {
    id: 'debug-tools',
    name: '调试工具',
    list: [

    ]
  }
];
