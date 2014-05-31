define([], function() {
  console.log('yellow')
    return {
        name: 'Synchronous',
        color: [[244,244,31], [192,192,192]],
        teams: [
            {
                name: 'Cupru - Synchronous',
                boss: {
                    name: 'Metrarch the Machinist',
                    econ_rate: 0.9,
                    personality: {
                        percent_land: 0.3,
                        percent_air: 0.3,
                        percent_naval: 0.05,
                        percent_orbital: 0.35,
                        metal_drain_check: 0.75,
                        energy_drain_check: 0.85,
                        metal_demand_check: 0.75,
                        energy_demand_check: 0.85,
                        micro_type: 2,
                        go_for_the_kill: true,
                        neural_data_mod: 1
                    },
                    commander: {
                        ObjectName: 'TankAeson',
                        UnitSpec: '/pa/units/commanders/tank_aeson/tank_aeson.json',
                    },
                    minions: [
                        {
                            name: 'Servant Aust',
                            econ_rate: 0.9,
                            color: [[244,244,31], [192,192,192]],
                            commander: {
                                ObjectName: 'TankAeson',
                                UnitSpec: '/pa/units/commanders/tank_aeson/tank_aeson.json',
                            }
                        },
                        {
                            name: 'Servant Bhalam',
                            econ_rate: 0.9,
                            color: [[244,244,31], [192,192,192]],
                            commander: {
                                ObjectName: 'TankAeson',
                                UnitSpec: '/pa/units/commanders/tank_aeson/tank_aeson.json',
                            }
                        }
                    ]
                },
                bossCard: 'gwc_start_bot',
                systemDescription: 'Known for its rich deposits of copper, Cupru also had the distinction of being the only system in the known galaxy where the giant Cupru Cosvierme, a worm the size of the Empire State Building on ancient Earth, could be found. The crew of the Terradine Corp mining vessel Flying Solo found this out when they attempted to prospect in a massive cave they had discovered in Cupru. After setting off their first seismic charge, the crew was faced with an imminent cave collapse. Barely escaping, it dawned on them what had really happened. Xenobiologists flocked to the system to study the worm, and discovered a large population. Terradine quickly withdrew any claims on Cupru. Years later the Progenitor Coalition were defeated by the Machine Liberation Army at the Battle of Cupru during the Pro-Com War.',
                systemTemplate: {
                    name: 'Cupru - Synchronous',
                    Planets: [
                        {
                            name: 'Cupru Prime',
                            starting_planet: true,
                            mass: 33000,
                            Thrust: [0, 0],
                            Radius: [500, 700],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [90, 100],
                            MetalClusters: [90, 100],
                            BiomeScale: [100, 100],
                            Position: [0, -20000],
                            Velocity: [160, 0],
                            Biomes: ['metal']
                        },
                        {
                            name: 'Cupru Beta',
                            starting_planet: true,
                            mass: 33000,
                            Thrust: [0, 0],
                            Radius: [500, 700],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [90, 100],
                            MetalClusters: [90, 100],
                            BiomeScale: [100, 100],
                            Position: [140000, 0],
                            Velocity: [-0.4407, 190.288],
                            Biomes: ['metal']
                        },
                        {
                            name: 'Cupru Gamma',
                            mass: 33000,
                            Thrust: [4, 6],
                            Radius: [450, 550],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [90, 100],
                            MetalClusters: [90, 100],
                            BiomeScale: [100, 100],
                            Position: [-35000, 0],
                            Velocity: [-0.4897, 119.586],
                            Biomes: ['metal']
                        },
                    ]
                },
            },
            {
                name: 'Platina - Synchronous',
                boss: {
                    name: 'Metrarch the Machinist',
                    econ_rate: 0.9,
                    personality: {
                        percent_land: 0.3,
                        percent_air: 0.3,
                        percent_naval: 0.05,
                        percent_orbital: 0.35,
                        metal_drain_check: 0.75,
                        energy_drain_check: 0.85,
                        metal_demand_check: 0.75,
                        energy_demand_check: 0.85,
                        micro_type: 2,
                        go_for_the_kill: true,
                        neural_data_mod: 1
                    },
                    commander: {
                        ObjectName: 'TankAeson',
                        UnitSpec: '/pa/units/commanders/tank_aeson/tank_aeson.json',
                    },
                    minions: [
                        {
                            name: 'Servant Aust',
                            econ_rate: 0.9,
                            color: [[244,244,31], [192,192,192]],
                            commander: {
                                ObjectName: 'TankAeson',
                                UnitSpec: '/pa/units/commanders/tank_aeson/tank_aeson.json',
                            }
                        },
                        {
                            name: 'Servant Bhalam',
                            econ_rate: 0.9,
                            color: [[244,244,31], [192,192,192]],
                            commander: {
                                ObjectName: 'TankAeson',
                                UnitSpec: '/pa/units/commanders/tank_aeson/tank_aeson.json',
                            }
                        }
                    ]
                },
                //bossCard: 'gwc_start_orbital',
                systemDescription: 'Platina was the site of the largest Commander vs. Commander battle of the Pro-Com War. Nearly fifty Machine Liberation Army (MLA) Commanders invaded the system knowing it was being held by over thirty Loyalist Commanders. MLA Intelligence had deduced that the Progenitor Coalition and their Loyalist allies were protecting a high value target that needed to be captured or destroyed. It was a trap. Hidden Loyalist forces pounced on the MLA, now outnumbering them 2 to 1. The Battle of Platina was single biggest loss of MLA Commanders in the entire war. It would take them over ten years to recover.',
                systemTemplate: {
                    name: 'Platina - Synchronous',
                    Planets: [
                        {
                            name: 'Platina Prime',
                            starting_planet: true,
                            mass: 33000,
                            Thrust: [0, 0],
                            Radius: [800, 900],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [90, 100],
                            MetalClusters: [90, 100],
                            BiomeScale: [100, 100],
                            Position: [0, -20000],
                            Velocity: [160, 0],
                            Biomes: ['metal']
                        },
                        {
                            name: 'Platina Beta',
                            starting_planet: true,
                            mass: 33000,
                            Thrust: [0, 0],
                            Radius: [450, 750],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [90, 100],
                            MetalClusters: [90, 100],
                            BiomeScale: [100, 100],
                            Position: [140000, 0],
                            Velocity: [-0.4407, 190.288],
                            Biomes: ['metal']
                        },
                        {
                            name: 'Platina Gamma',
                            mass: 33000,
                            Thrust: [4, 6],
                            Radius: [450, 550],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [90, 100],
                            MetalClusters: [90, 100],
                            BiomeScale: [100, 100],
                            Position: [-35000, 0],
                            Velocity: [-0.4897, 119.586],
                            Biomes: ['metal']
                        },
                    ]
                }
            },
            {
                name: 'Fier - Synchronous',
                boss: {
                    name: 'Metrarch the Machinist',
                    econ_rate: 0.9,
                    personality: {
                        percent_land: 0.3,
                        percent_air: 0.3,
                        percent_naval: 0.05,
                        percent_orbital: 0.35,
                        metal_drain_check: 0.75,
                        energy_drain_check: 0.85,
                        metal_demand_check: 0.75,
                        energy_demand_check: 0.85,
                        micro_type: 2,
                        go_for_the_kill: true,
                        neural_data_mod: 1
                    },
                    commander: {
                        ObjectName: 'TankAeson',
                        UnitSpec: '/pa/units/commanders/tank_aeson/tank_aeson.json',
                    },
                    minions: [
                        {
                            name: 'Servant Aust',
                            econ_rate: 0.9,
                            color: [[244,244,31], [192,192,192]],
                            commander: {
                                ObjectName: 'TankAeson',
                                UnitSpec: '/pa/units/commanders/tank_aeson/tank_aeson.json',
                            }
                        },
                        {
                            name: 'Servant Bhalam',
                            econ_rate: 0.9,
                            color: [[244,244,31], [192,192,192]],
                            commander: {
                                ObjectName: 'TankAeson',
                                UnitSpec: '/pa/units/commanders/tank_aeson/tank_aeson.json',
                            }
                        }
                    ]
                },
                //bossCard: 'gwc_start_orbital',
                systemDescription: 'Azaghul, one of the largest mining companies in the Progenitor Coalition, was the first to lobby the General Assembly for the mining rights to this system. Azaghul gambled on the system for producing large amounts of metals, and they were not disappointed. As it turned out, Fier produced a new type of iron, which Azaghul scientist labeled "Dragon”.  The new "Dragon Iron” had a much higher melting point than normal iron and was naturally stronger than steel, and lighter than aluminum. The discovery of Dragon Iron launched Azaghul to the top, putting them on even terms with Terradine Corp in the mining and refining of metals.',
                systemTemplate: {
                    name: 'Fier - Synchronous',
                    Planets: [
                        {
                            name: 'Fier Prime',
                            starting_planet: true,
                            mass: 33000,
                            Thrust: [0, 0],
                            Radius: [450, 550],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [90, 100],
                            MetalClusters: [90, 100],
                            BiomeScale: [100, 100],
                            Position: [0, -20000],
                            Velocity: [160, 0],
                            Biomes: ['metal']
                        },
                        {
                            name: 'Fier Beta',
                            starting_planet: true,
                            mass: 33000,
                            Thrust: [0, 0],
                            Radius: [450, 550],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [90, 100],
                            MetalClusters: [90, 100],
                            BiomeScale: [100, 100],
                            Position: [140000, 0],
                            Velocity: [-0.4407, 190.288],
                            Biomes: ['metal']
                        },
                        {
                            name: 'Fier Gamma',
                            mass: 33000,
                            Thrust: [4, 6],
                            Radius: [600, 700],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [90, 100],
                            MetalClusters: [90, 100],
                            BiomeScale: [100, 100],
                            Position: [-35000, 0],
                            Velocity: [-0.4897, 119.586],
                            Biomes: ['metal']
                        },
                    ]
                }
            },
            {
                name: 'Safir - Synchronous',
                boss: {
                    name: 'Metrarch the Machinist',
                    econ_rate: 0.9,
                    personality: {
                        percent_land: 0.3,
                        percent_air: 0.3,
                        percent_naval: 0.05,
                        percent_orbital: 0.35,
                        metal_drain_check: 0.75,
                        energy_drain_check: 0.85,
                        metal_demand_check: 0.75,
                        energy_demand_check: 0.85,
                        micro_type: 2,
                        go_for_the_kill: true,
                        neural_data_mod: 1
                    },
                    commander: {
                        ObjectName: 'TankAeson',
                        UnitSpec: '/pa/units/commanders/tank_aeson/tank_aeson.json',
                    },
                    minions: [
                        {
                            name: 'Servant Aust',
                            econ_rate: 1.1,
                            color: [[244,244,31], [192,192,192]],
                            commander: {
                                ObjectName: 'TankAeson',
                                UnitSpec: '/pa/units/commanders/tank_aeson/tank_aeson.json',
                            }
                        },
                        {
                            name: 'Servant Bhalam',
                            econ_rate: 0.7,
                            color: [[244,244,31], [192,192,192]],
                            commander: {
                                ObjectName: 'TankAeson',
                                UnitSpec: '/pa/units/commanders/tank_aeson/tank_aeson.json',
                            }
                        }
                    ]
                },
                //bossCard: 'gwc_start_orbital',
                systemDescription: 'This system was home to some of the most vibrant and colorful star patterns in the known galaxy. Due to its mysterious molecular makeup, an individual traveling through the system would see the stars appear in every shade of blue imaginable. The view of the tapestry of the galaxy from the confines of Safir often drew Progenitor artists from all around who wanted to capture the stunning vistas in their artwork. Explorer Saresh Bishwas III was quoted as saying of the view "Never before in all my travels throughout this amazing expanse of stars have I ever seen images that personify my dreams of Heaven”.',
                systemTemplate: {
                    name: 'Safir - Synchronous',
                    Planets: [
                        {
                            name: 'Safir Prime',
                            starting_planet: true,
                            mass: 33000,
                            Thrust: [0, 0],
                            Radius: [500, 700],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [90, 100],
                            MetalClusters: [90, 100],
                            BiomeScale: [100, 100],
                            Position: [0, -20000],
                            Velocity: [160, 0],
                            Biomes: ['metal']
                        },
                        {
                            name: 'Safir Beta',
                            starting_planet: true,
                            mass: 33000,
                            Thrust: [0, 0],
                            Radius: [500, 700],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [90, 100],
                            MetalClusters: [90, 100],
                            BiomeScale: [100, 100],
                            Position: [140000, 0],
                            Velocity: [-0.4407, 190.288],
                            Biomes: ['metal']
                        },
                        {
                            name: 'Safir Gamma',
                            mass: 33000,
                            Thrust: [4, 6],
                            Radius: [450, 550],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [90, 100],
                            MetalClusters: [90, 100],
                            BiomeScale: [100, 100],
                            Position: [-35000, 0],
                            Velocity: [-0.4897, 119.586],
                            Biomes: ['metal']
                        },
                    ]
                }
            },
            {
                name: 'Apa - Synchronous',
                boss: {
                    name: 'Metrarch the Machinist',
                    econ_rate: 0.9,
                    personality: {
                        percent_land: 0.3,
                        percent_air: 0.3,
                        percent_naval: 0.05,
                        percent_orbital: 0.35,
                        metal_drain_check: 0.75,
                        energy_drain_check: 0.85,
                        metal_demand_check: 0.75,
                        energy_demand_check: 0.85,
                        micro_type: 2,
                        go_for_the_kill: true,
                        neural_data_mod: 1
                    },
                    commander: {
                        ObjectName: 'TankAeson',
                        UnitSpec: '/pa/units/commanders/tank_aeson/tank_aeson.json',
                    },
                    minions: [
                        {
                            name: 'Servant Aust',
                            econ_rate: 0.7,
                            color: [[244,244,31], [192,192,192]],
                            commander: {
                                ObjectName: 'TankAeson',
                                UnitSpec: '/pa/units/commanders/tank_aeson/tank_aeson.json',
                            }
                        },
                        {
                            name: 'Servant Bhalam',
                            econ_rate: 1.1,
                            color: [[244,244,31], [192,192,192]],
                            commander: {
                                ObjectName: 'TankAeson',
                                UnitSpec: '/pa/units/commanders/tank_aeson/tank_aeson.json',
                            }
                        }
                    ]
                },
                //bossCard: 'gwc_start_orbital',
                systemDescription: 'Apa was a favorite destination for Progenitor recreational divers and oceanographers. Especially beautiful was the extensive Tarakona Reef, which was over twice the size of the Great Barrier Reef on Earth. The reef was destroyed in the Pro-Com War by the Machine Liberation Army who dropped millions of chemical bombs in an effort to kill off all the biological life and vaporize the oceans. They were successful.',
                systemTemplate: {
                    name: 'Apa - Synchronous',
                    Planets: [
                        {
                            name: 'Apa Prime',
                            starting_planet: true,
                            mass: 33000,
                            Thrust: [0, 0],
                            Radius: [450, 550],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [90, 100],
                            MetalClusters: [90, 100],
                            BiomeScale: [100, 100],
                            Position: [0, -20000],
                            Velocity: [160, 0],
                            Biomes: ['metal']
                        },
                        {
                            name: 'Apa Beta',
                            starting_planet: true,
                            mass: 33000,
                            Thrust: [0, 0],
                            Radius: [650, 800],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [90, 100],
                            MetalClusters: [90, 100],
                            BiomeScale: [100, 100],
                            Position: [140000, 0],
                            Velocity: [-0.4407, 190.288],
                            Biomes: ['metal']
                        },
                        {
                            name: 'Apa Gamma',
                            mass: 33000,
                            Thrust: [4, 6],
                            Radius: [450, 550],
                            Height: [0, 0],
                            Water: [0, 0],
                            Temp: [0, 100],
                            MetalDensity: [90, 100],
                            MetalClusters: [90, 100],
                            BiomeScale: [100, 100],
                            Position: [-35000, 0],
                            Velocity: [-0.4897, 119.586],
                            Biomes: ['metal']
                        },
                    ]
                }
            }
        ], // teams
        minions: [
            {
                name: 'Servant Bhalam',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Campal',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Dkar',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Erom',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Flornek',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Ghel',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Hinn',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Inar-Tol',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Jakaal',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Kancetu',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Lertolux',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Mal-Locar',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Negult',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Oncab',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Prulor',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Questromo',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Rulak',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Shelwhu',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Tarcolish',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Urlox',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Vela',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Worr',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Xiercy',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Yelam',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            },
            {
                name: 'Servant Zekktalt',
                econ_rate: 1.0,
                personality: {
                    percent_land: 0.3,
                    percent_air: 0.3,
                    percent_naval: 0.05,
                    percent_orbital: 0.35,
                    metal_drain_check: 0.75,
                    energy_drain_check: 0.85,
                    metal_demand_check: 0.75,
                    energy_demand_check: 0.85,
                    micro_type: 2,
                    go_for_the_kill: true,
                    neural_data_mod: 1
                },
            }
        ] // minions
    };
});
