const robots = [
  {
    name: 'Developer Package',
    price: 19,
    priceSalt: 999,
    image: 'developer.png',
    description:
      'We’ve partnered with NVIDIA to offer a "Lander5" built around the Jetson AGX Xavier: a fast, efficient computing device, ideal for robotics development. The JETSON developer package takes advantage of NVIDIA’s standard hardware interfaces and graphics processing capabilities. Built around a powerful and compact GPU, the Jetson is the preferred computing platform for VSLAM, 3D imaging and machine learning applications',
  },
  {
    name: 'Explorer Package',
    price: 24,
    priceSalt: 999,
    image: 'explore.png',
    description:
      'The Lander5 Explorer Package is designed for basic autonomous operation in both indoor and outdoor environments. Applications range from GPS waypoint navigation with laser-based collision avoidance, to indoor mapping and path planning. A powerful Mini-ITX computer system comes pre-installed with Linux and ROS; all component ROS drivers are installed and pre-configured.',
  },
  {
    name: 'Vision Package',
    price: 29,
    priceSalt: 999,
    image: 'vision.jpg',
    description:
      'The Lander5 Vision Package includes two front-facing FLIR Blackfly cameras for stereo vision, an upgraded GPU graphics card and a high performance computer. This package comes with a pre-installed CUDA toolkit, and is fully supported with ROS, RViz (visualization), and Gazebo (simulator).',
  },
];

export default robots;
