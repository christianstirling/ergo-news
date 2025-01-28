/*  INTRO

    You are going to copy all of the code from parts 0-3 and paste it into the calculator
    file towards the top of the file (below the force type / handle type data and ABOVE
    the tasks initialization).  Then, delete the 'const tasks' initialization.
*/

/*  PART 0: handleTypesObject (OBJECT)

    This section of the code is an object that holds all of the handle types used
    in module 2 of the app. This is the equivalent to the force types in module 1.

    Ultimately, this holds all of the mean and standard deviation values for each combination 
    of modifiers selected by the user for each handle type.

    The 'createTasks' function below will use the user-selected attributes to navigate the object tree
    and locate the correct mean and standard deviation values (one-of-each for male and one-of-each for female).

*/

const handleTypes = {
    "Key": {
        "Male": {
            mean: 36.72,
            stdDev: 5.75
        },
        "Female": {
            mean: 28.76,
            stdDev: 0.44
        }
    },
    "Door Knob": {
        "Male": {
            mean: 61.51,
            stdDev: 21.86
        },
        "Female": {
            mean: 46.47,
            stdDev: 12.75
        }
    },
    "L-Shaped": {
        "Right": {
            "Counter-clockwise": {
                "Male": {
                    mean: 154,
                    stdDev: 46.02
                },
                "Female": {
                    mean: 101.64,
                    stdDev: 30.38
                }
            },
            "Clockwise": {
                "Male": {
                    mean: 121.26,
                    stdDev: 30.09
                },
                "Female": {
                    mean: 80.03,
                    stdDev: 19.86
                }
            }
        },
        "Left": {
            "Clockwise": {
                "Male": {
                    mean: 154.00,
                    stdDev: 46.02
                },
                "Female": {
                    mean: 101.64,
                    stdDev: 30.38
                }
            },
            "Counter-clockwise": {
                "Male": {
                    mean: 121.26,
                    stdDev: 30.09
                },
                "Female": {
                    mean: 80.03,
                    stdDev: 19.86
                }
            }
        }
    },
    "Ridged Knob": {
        "Male": {
            mean: 37.79,
            stdDev: 8.67
        },
        "Female": {
            mean: 25.40,
            stdDev: 5.66
        }
    },
    "Tap": {
        "Male": {
            mean: 73.20,
            stdDev: 19.91
        },
        "Female": {
            mean: 53.37,
            stdDev: 13.28
        }
    },
    "Wing Nut": {
        "Male": {
            mean: 34.96,
            stdDev: 9.74
        },
        "Female": {
            mean: 23.90,
            stdDev: 5.13
        }
    },
    "Jar Lid": {
        "Knurled": {
            "1.8 inch diameter": {
                "Male": {
                    mean: 39.83,
                    stdDev: 11.33
                },
                "Female": {
                    mean: 31.95,
                    stdDev: 10.18
                }
            },
            "2.6 inch diameter": {
                "Male": {
                    mean: 58.68,
                    stdDev: 13.28
                },
                "Female": {
                    mean: 42.13,
                    stdDev: 12.39
                }
            },
            "3.3 inch diameter": {
                "Male": {
                    mean: 74.61,
                    stdDev: 15.84
                },
                "Female": {
                    mean: 52.48,
                    stdDev: 13.45
                }
            }
        },
        "Smooth": {
            "1.8 inch diameter": {
                "Male": {
                    mean: 32.66,
                    stdDev: 10.09
                },
                "Female": {
                    mean: 28.59,
                    stdDev: 10.09
                }
            },
            "2.6 inch diameter": {
                "Male": {
                    mean: 50.01,
                    stdDev: 10.80
                },
                "Female": {
                    mean: 38.85,
                    stdDev: 12.39
                }
            },
            "3.3 inch diameter": {
                "Male": {
                    mean: 67.27,
                    stdDev: 15.22
                },
                "Female": {
                    mean: 51.51,
                    stdDev: 16.73
                }
            }
        }
    },
    "Round Knob": {
        "Knurled": {
            "0.125 inch diameter": {
                "Male": {
                    mean: 0.57,
                    stdDev: 0.19
                },
                "Female": {
                    mean: 0.38,
                    stdDev: 0.13
                }
            },
            "0.25 inch diameter": {
                "Male": {
                    mean: 1.22,
                    stdDev: 0.34
                },
                "Female": {
                    mean: 0.81,
                    stdDev: 0.22
                }
            },
            "0.5 inch diameter": {
                "Male": {
                    mean: 1.99,
                    stdDev: 0.84
                },
                "Female": {
                    mean: 1.33,
                    stdDev: 0.56
                }
            },
            "0.75 inch diameter": {
                "Male": {
                    mean: 5.81,
                    stdDev: 1.98
                },
                "Female": {
                    mean: 3.88,
                    stdDev: 1.32
                }
            },
            "1.0 inch diameter": {
                "Male": {
                    mean: 7.25,
                    stdDev: 2.22
                },
                "Female": {
                    mean: 4.82,
                    stdDev: 1.48
                }
            },
            "1.5 inch diameter": {
                "Male": {
                    mean: 9.17,
                    stdDev: 2.35
                },
                "Female": {
                    mean: 6.11,
                    stdDev: 1.56
                }
            },
            "2.0 inch diameter": {
                "Male": {
                    mean: 13.13,
                    stdDev: 3.05
                },
                "Female": {
                    mean: 8.74,
                    stdDev: 2.04
                }
            },
            "3.0 inch diameter": {
                "Male": {
                    mean: 29.85,
                    stdDev: 8.53
                },
                "Female": {
                    mean: 19.88,
                    stdDev: 5.68
                }
            },
            "4.0 inch diameter": {
                "Male": {
                    mean: 43.62,
                    stdDev: 10.87
                },
                "Female": {
                    mean: 29.05,
                    stdDev: 7.24
                }
            },
            "5.0 inch diameter": {
                "Male": {
                    mean: 60.82,
                    stdDev: 16.42
                },
                "Female": {
                    mean: 40.51,
                    stdDev: 10.93
                }
            }
        },
        "Smooth": {
            "0.125 inch diameter": {
                "Male": {
                    mean: 0.19,
                    stdDev: 0.10
                },
                "Female": {
                    mean: 0.12,
                    stdDev: 0.06
                }
            },
            "0.25 inch diameter": {
                "Male": {
                    mean: 0.52,
                    stdDev: 0.20
                },
                "Female": {
                    mean: 0.35,
                    stdDev: 0.13
                }
            },
            "0.5 inch diameter": {
                "Male": {
                    mean: 1.36,
                    stdDev: 0.48
                },
                "Female": {
                    mean: 0.90,
                    stdDev: 0.32
                }
            },
            "0.75 inch diameter": {
                "Male": {
                    mean: 2.49,
                    stdDev: 0.66
                },
                "Female": {
                    mean: 1.66,
                    stdDev: 0.44
                }
            },
            "1.0 inch diameter": {
                "Male": {
                    mean: 3.69,
                    stdDev: 1.33
                },
                "Female": {
                    mean: 2.46,
                    stdDev: 0.89
                }
            },
            "1.5 inch diameter": {
                "Male": {
                    mean: 6.09,
                    stdDev: 1.65
                },
                "Female": {
                    mean: 4.05,
                    stdDev: 1.10
                }
            },
            "2.0 inch diameter": {
                "Male": {
                    mean: 9.25,
                    stdDev: 2.92
                },
                "Female": {
                    mean: 6.16,
                    stdDev: 1.95
                }
            },
            "3.0 inch diameter": {
                "Male": {
                    mean: 16.69,
                    stdDev: 5.07
                },
                "Female": {
                    mean: 11.12,
                    stdDev: 3.38
                }
            },
            "4.0 inch diameter": {
                "Male": {
                    mean: 28.38,
                    stdDev: 8.45
                },
                "Female": {
                    mean: 18.91,
                    stdDev: 5.63
                }
            },
            "5.0 inch diameter": {
                "Male": {
                    mean: 44.77,
                    stdDev: 14.11
                },
                "Female": {
                    mean: 29.82,
                    stdDev: 9.40
                }
            }
        }
    },
    "Regular Screwdriver": {
        "Right": {
            "Counter-clockwise": {
                "Palm-down (60 degrees Pronated)": {
                    "Male": {
                        mean: 18.19,
                        stdDev: 5.64
                    },
                    "Female": {
                        mean: 12.00,
                        stdDev: 3.72
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 35.03,
                        stdDev: 6.46
                    },
                    "Female": {
                        mean: 23.12,
                        stdDev: 4.26
                    }
                },
                "Palm-up (60 degrees Supinated)": {
                    "Male": {
                        mean: 44.26,
                        stdDev: 9.14
                    },
                    "Female": {
                        mean: 29.21,
                        stdDev: 6.03
                    }
                }
            },
            "Clockwise": {
                "Palm-down (60 degrees Pronated)": {
                    "Male": {
                        mean: 46.19,
                        stdDev: 13.08
                    },
                    "Female": {
                        mean: 30.49,
                        stdDev: 8.63
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 44.94,
                        stdDev: 9.53
                    },
                    "Female": {
                        mean: 29.66,
                        stdDev: 6.29
                    }
                },
                "Palm-up (60 degrees Supinated)": {
                    "Male": {
                        mean: 36.52,
                        stdDev: 12.15
                    },
                    "Female": {
                        mean: 24.10,
                        stdDev: 8.02
                    }
                }
            }
        },
        "Left": {
            "Clockwise": {
                "Palm-down (60 degrees Pronated)": {
                    "Male": {
                        mean: 18.19,
                        stdDev: 5.64
                    },
                    "Female": {
                        mean: 12.00,
                        stdDev: 3.72
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 35.03,
                        stdDev: 6.46
                    },
                    "Female": {
                        mean: 23.12,
                        stdDev: 4.26
                    }
                },
                "Palm-up (60 degrees Supinated)": {
                    "Male": {
                        mean: 44.26,
                        stdDev: 9.14
                    },
                    "Female": {
                        mean: 29.21,
                        stdDev: 6.03
                    }
                }
            },
            "Counter-clockwise": {
                "Palm-down (60 degrees Pronated)": {
                    "Male": {
                        mean: 46.19,
                        stdDev: 13.08
                    },
                    "Female": {
                        mean: 30.49,
                        stdDev: 8.63
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 44.94,
                        stdDev: 9.53
                    },
                    "Female": {
                        mean: 29.66,
                        stdDev: 6.29
                    }
                },
                "Palm-up (60 degrees Supinated)": {
                    "Male": {
                        mean: 36.52,
                        stdDev: 12.15
                    },
                    "Female": {
                        mean: 24.10,
                        stdDev: 8.02
                    }
                }
            }
        }
    },
    "Pistol Grip Screwdriver": {
        "Right": {
            "Counter-clockwise": {
                "Palm-down (60 degrees Pronated)": {
                    "Male": {
                        mean: 31.42,
                        stdDev: 17.36
                    },
                    "Female": {
                        mean: 18.22,
                        stdDev: 10.07
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 68.51,
                        stdDev: 21.61
                    },
                    "Female": {
                        mean: 39.74,
                        stdDev: 12.54
                    }
                },
                "Palm-up (60 degrees Supinated)": {
                    "Male": {
                        mean: 103.64,
                        stdDev: 24.84
                    },
                    "Female": {
                        mean: 60.11,
                        stdDev: 14.40
                    }
                }
            },
            "Clockwise": {
                "Palm-down (60 degrees Pronated)": {
                    "Male": {
                        mean: 105.37,
                        stdDev: 26.76
                    },
                    "Female": {
                        mean: 55.85,
                        stdDev: 14.19
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 87.84,
                        stdDev: 19.10
                    },
                    "Female": {
                        mean: 46.56,
                        stdDev: 10.12
                    }
                },
                "Palm-up (60 degrees Supinated)": {
                    "Male": {
                        mean: 52.90,
                        stdDev: 19.48
                    },
                    "Female": {
                        mean: 28.04,
                        stdDev: 10.32
                    }
                }
            }
        },
        "Left": {
            "Clockwise": {
                "Palm-down (60 degrees Pronated)": {
                    "Male": {
                        mean: 31.42,
                        stdDev: 17.36
                    },
                    "Female": {
                        mean: 18.22,
                        stdDev: 10.07
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 68.51,
                        stdDev: 21.61
                    },
                    "Female": {
                        mean: 39.74,
                        stdDev: 12.54
                    }
                },
                "Palm-up (60 degrees Supinated)": {
                    "Male": {
                        mean: 103.64,
                        stdDev: 24.84
                    },
                    "Female": {
                        mean: 60.11,
                        stdDev: 14.40
                    }
                }
            },
            "Counter-clockwise": {
                "Palm-down (60 degrees Pronated)": {
                    "Male": {
                        mean: 105.37,
                        stdDev: 26.76
                    },
                    "Female": {
                        mean: 55.85,
                        stdDev: 14.19
                    }
                },
                "Hand-shake (Neutral)": {
                    "Male": {
                        mean: 87.84,
                        stdDev: 19.10
                    },
                    "Female": {
                        mean: 46.56,
                        stdDev: 10.12
                    }
                },
                "Palm-up (60 degrees Supinated)": {
                    "Male": {
                        mean: 52.90,
                        stdDev: 19.48
                    },
                    "Female": {
                        mean: 28.04,
                        stdDev: 10.32
                    }
                }
            }
        }
    },
    "T-Handle": {
        "Right": {
            "Elbow Angle 180 degrees": {
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 113.29,
                            stdDev: 40.71
                        },
                        "Female": {
                            mean: 65.71,
                            stdDev: 23.61
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 30.09
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 17.45
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 25.67
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 14.89
                        }
                    }
                },
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 128.34,
                            stdDev: 44.25
                        },
                        "Female": {
                            mean: 68.02,
                            stdDev: 23.45
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 102.67,
                            stdDev: 41.60
                        },
                        "Female": {
                            mean: 54.41,
                            stdDev: 22.05
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 99.13,
                            stdDev: 60.19
                        },
                        "Female": {
                            mean: 52.54,
                            stdDev: 31.90
                        }
                    }
                }
            },
            "Elbow Angle 135 degrees": {
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 107.09,
                            stdDev: 44.25
                        },
                        "Female": {
                            mean: 62.11,
                            stdDev: 25.67
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 119.49,
                            stdDev: 26.55
                        },
                        "Female": {
                            mean: 69.30,
                            stdDev: 15.40
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 117.71,
                            stdDev: 29.21
                        },
                        "Female": {
                            mean: 68.27,
                            stdDev: 16.94
                        }
                    }
                },
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 139.84,
                            stdDev: 56.64
                        },
                        "Female": {
                            mean: 74.12,
                            stdDev: 30.02
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 126.57,
                            stdDev: 49.56
                        },
                        "Female": {
                            mean: 67.08,
                            stdDev: 26.27
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 115.06,
                            stdDev: 64.61
                        },
                        "Female": {
                            mean: 60.98,
                            stdDev: 34.24
                        }
                    }
                }
            },
            "Elbow Angle 90 degrees": {
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 97.36,
                            stdDev: 50.45
                        },
                        "Female": {
                            mean: 56.47,
                            stdDev: 29.26
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 113.29,
                            stdDev: 39.83
                        },
                        "Female": {
                            mean: 65.71,
                            stdDev: 23.10
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 115.94,
                            stdDev: 35.40
                        },
                        "Female": {
                            mean: 67.25,
                            stdDev: 20.53
                        }
                    }
                },
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 137.19,
                            stdDev: 53.99
                        },
                        "Female": {
                            mean: 72.71,
                            stdDev: 28.61
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 138.96,
                            stdDev: 55.76
                        },
                        "Female": {
                            mean: 73.65,
                            stdDev: 29.55
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 117.71,
                            stdDev: 69.92
                        },
                        "Female": {
                            mean: 62.39,
                            stdDev: 37.06
                        }
                    }
                }
            },
            "Elbow Angle 45 degrees": {
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 79.66,
                            stdDev: 42.48
                        },
                        "Female": {
                            mean: 46.20,
                            stdDev: 24.64
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 104.44,
                            stdDev: 33.63
                        },
                        "Female": {
                            mean: 60.57,
                            stdDev: 19.51
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 23.90
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 13.86
                        }
                    }
                },
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 143.38,
                            stdDev: 51.33
                        },
                        "Female": {
                            mean: 75.99,
                            stdDev: 27.21
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 122.14,
                            stdDev: 41.60
                        },
                        "Female": {
                            mean: 64.73,
                            stdDev: 22.05
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 96.47,
                            stdDev: 52.22
                        },
                        "Female": {
                            mean: 51.13,
                            stdDev: 27.68
                        }
                    }
                }
            }
        },
        "Left": {
            "Elbow Angle 180 degrees": {
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 113.29,
                            stdDev: 40.71
                        },
                        "Female": {
                            mean: 65.71,
                            stdDev: 23.61
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 30.09
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 17.45
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 25.67
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 14.89
                        }
                    }
                },
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 128.34,
                            stdDev: 44.25
                        },
                        "Female": {
                            mean: 68.02,
                            stdDev: 23.45
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 102.67,
                            stdDev: 41.60
                        },
                        "Female": {
                            mean: 54.41,
                            stdDev: 22.05
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 99.13,
                            stdDev: 60.19
                        },
                        "Female": {
                            mean: 52.54,
                            stdDev: 31.90
                        }
                    }
                }
            },
            "Elbow Angle 135 degrees": {
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 107.09,
                            stdDev: 44.25
                        },
                        "Female": {
                            mean: 62.11,
                            stdDev: 25.67
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 119.49,
                            stdDev: 26.55
                        },
                        "Female": {
                            mean: 69.30,
                            stdDev: 15.40
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 117.71,
                            stdDev: 29.21
                        },
                        "Female": {
                            mean: 68.27,
                            stdDev: 16.94
                        }
                    }
                },
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 139.84,
                            stdDev: 56.64
                        },
                        "Female": {
                            mean: 74.12,
                            stdDev: 30.02
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 126.57,
                            stdDev: 49.56
                        },
                        "Female": {
                            mean: 67.08,
                            stdDev: 26.27
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 115.06,
                            stdDev: 64.61
                        },
                        "Female": {
                            mean: 60.98,
                            stdDev: 34.24
                        }
                    }
                }
            },
            "Elbow Angle 90 degrees": {
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 97.36,
                            stdDev: 50.45
                        },
                        "Female": {
                            mean: 56.47,
                            stdDev: 29.26
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 113.29,
                            stdDev: 39.83
                        },
                        "Female": {
                            mean: 65.71,
                            stdDev: 23.10
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 115.94,
                            stdDev: 35.40
                        },
                        "Female": {
                            mean: 67.25,
                            stdDev: 20.53
                        }
                    }
                },
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 137.19,
                            stdDev: 53.99
                        },
                        "Female": {
                            mean: 72.71,
                            stdDev: 28.61
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 138.96,
                            stdDev: 55.76
                        },
                        "Female": {
                            mean: 73.65,
                            stdDev: 29.55
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 117.71,
                            stdDev: 69.92
                        },
                        "Female": {
                            mean: 62.39,
                            stdDev: 37.06
                        }
                    }
                }
            },
            "Elbow Angle 45 degrees": {
                "Clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 79.66,
                            stdDev: 42.48
                        },
                        "Female": {
                            mean: 46.20,
                            stdDev: 24.64
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 104.44,
                            stdDev: 33.63
                        },
                        "Female": {
                            mean: 60.57,
                            stdDev: 19.51
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 103.55,
                            stdDev: 23.90
                        },
                        "Female": {
                            mean: 60.06,
                            stdDev: 13.68
                        }
                    }
                },
                "Counter-clockwise": {
                    "Palm-down (75% Range of Motion)": {
                        "Male": {
                            mean: 143.38,
                            stdDev: 51.33
                        },
                        "Female": {
                            mean: 75.99,
                            stdDev: 27.21
                        }
                    },
                    "Hand-shake (Neutral)": {
                        "Male": {
                            mean: 122.14,
                            stdDev: 41.60
                        },
                        "Female": {
                            mean: 64.73,
                            stdDev: 22.05
                        }
                    },
                    "Palm-up (75% Range of Motion)": {
                        "Male": {
                            mean: 96.47,
                            stdDev: 52.22
                        },
                        "Female": {
                            mean: 51.13,
                            stdDev: 27.68
                        }
                    }
                }
            }
        }
    },
    "Cylindrical Handle": {
        "Right": {
            "Smooth": {
                "Outward": {
                    "1.8 inch diameter": {
                        "Male": {
                            mean: 55.76,
                            stdDev: 20.36
                        },
                        "Female": {
                            mean: 20.36,
                            stdDev: 13.28
                        }
                    },
                    "2.3 inch diameter": {
                        "Male": {
                            mean: 46.91,
                            stdDev: 11.51
                        },
                        "Female": {
                            mean: 19.47,
                            stdDev: 13.28
                        }
                    },
                    "3.3 inch diameter": {
                        "Male": {
                            mean: 43.37,
                            stdDev: 18.59
                        },
                        "Female": {
                            mean: 21.24,
                            stdDev: 12.39
                        }
                    }
                },
                "Inward": {
                    "1.8 inch diameter": {
                        "Male": {
                            mean: 61.96,
                            stdDev: 23.90
                        },
                        "Female": {
                            mean: 25.67,
                            stdDev: 22.13
                        }
                    },
                    "2.3 inch diameter": {
                        "Male": {
                            mean: 63.73,
                            stdDev: 15.05
                        },
                        "Female": {
                            mean: 26.67,
                            stdDev: 22.13
                        }
                    },
                    "3.3 inch diameter": {
                        "Male": {
                            mean: 53.10,
                            stdDev: 16.82
                        },
                        "Female": {
                            mean: 20.36,
                            stdDev: 17.70
                        }
                    }
                }
            },
            "Knurled": {
                "Outward": {
                    "1.8 inch diameter": {
                        "Male": {
                            mean: 63.73,
                            stdDev: 23.01
                        },
                        "Female": {
                            mean: 23.01,
                            stdDev: 15.05
                        }
                    },
                    "2.3 inch diameter": {
                        "Male": {
                            mean: 53.99,
                            stdDev: 13.28
                        },
                        "Female": {
                            mean: 22.13,
                            stdDev: 15.05
                        }
                    },
                    "3.3 inch diameter": {
                        "Male": {
                            mean: 49.56,
                            stdDev: 21.24
                        },
                        "Female": {
                            mean: 24.78,
                            stdDev: 14.16
                        }
                    }
                },
                "Inward": {
                    "1.8 inch diameter": {
                        "Male": {
                            mean: 71.69,
                            stdDev: 27.44
                        },
                        "Female": {
                            mean: 29.21,
                            stdDev: 25.67
                        }
                    },
                    "2.3 inch diameter": {
                        "Male": {
                            mean: 73.46,
                            stdDev: 17.70
                        },
                        "Female": {
                            mean: 29.21,
                            stdDev: 25.67
                        }
                    },
                    "3.3 inch diameter": {
                        "Male": {
                            mean: 61.07,
                            stdDev: 19.47
                        },
                        "Female": {
                            mean: 23.01,
                            stdDev: 20.36
                        }
                    }
                }
            }
        },
        "Left": {
            "Smooth": {
                "Outward": {
                    "1.8 inch diameter": {
                        "Male": {
                            mean: 55.76,
                            stdDev: 20.36
                        },
                        "Female": {
                            mean: 20.36,
                            stdDev: 13.28
                        }
                    },
                    "2.3 inch diameter": {
                        "Male": {
                            mean: 46.91,
                            stdDev: 11.51
                        },
                        "Female": {
                            mean: 19.47,
                            stdDev: 13.28
                        }
                    },
                    "3.3 inch diameter": {
                        "Male": {
                            mean: 43.37,
                            stdDev: 18.59
                        },
                        "Female": {
                            mean: 21.24,
                            stdDev: 12.39
                        }
                    }
                },
                "Inward": {
                    "1.8 inch diameter": {
                        "Male": {
                            mean: 61.96,
                            stdDev: 23.90
                        },
                        "Female": {
                            mean: 25.67,
                            stdDev: 22.13
                        }
                    },
                    "2.3 inch diameter": {
                        "Male": {
                            mean: 63.73,
                            stdDev: 15.05
                        },
                        "Female": {
                            mean: 25.67,
                            stdDev: 22.13
                        }
                    },
                    "3.3 inch diameter": {
                        "Male": {
                            mean: 53.10,
                            stdDev: 16.82
                        },
                        "Female": {
                            mean: 20.36,
                            stdDev: 17.70
                        }
                    }
                }
            },
            "Knurled": {
                "Outward": {
                    "1.8 inch diameter": {
                        "Male": {
                            mean: 63.73,
                            stdDev: 23.01
                        },
                        "Female": {
                            mean: 23.01,
                            stdDev: 15.05
                        }
                    },
                    "2.3 inch diameter": {
                        "Male": {
                            mean: 53.99,
                            stdDev: 13.28
                        },
                        "Female": {
                            mean: 22.13,
                            stdDev: 15.05
                        }
                    },
                    "3.3 inch diameter": {
                        "Male": {
                            mean: 49.56,
                            stdDev: 21.24
                        },
                        "Female": {
                            mean: 24.78,
                            stdDev: 14.16
                        }
                    }
                },
                "Inward": {
                    "1.8 inch diameter": {
                        "Male": {
                            mean: 71.69,
                            stdDev: 27.44
                        },
                        "Female": {
                            mean: 29.21,
                            stdDev: 25.67
                        }
                    },
                    "2.3 inch diameter": {
                        "Male": {
                            mean: 73.46,
                            stdDev: 17.70
                        },
                        "Female": {
                            mean: 29.21,
                            stdDev: 25.67
                        }
                    },
                    "3.3 inch diameter": {
                        "Male": {
                            mean: 61.07,
                            stdDev: 19.47
                        },
                        "Female": {
                            mean: 23.01,
                            stdDev: 20.36
                        }
                    }
                }
            }
        }
    }
}

/*  PART 1: inputArray (ARRAY)

    This section contains an array where you will enter the input array of tasks.

    These task objects will be similar to the objects used as input in module 1, with one
    important exception: 'modifiers'.

    The attribute named 'modifiers' corresponds to a array of Strings. Each string will
    contain the name of one modifier that the 'createTasks' function will use to 
    navigate the 'handleTypesObject' object to discover the appropriate pair of mean and standard 
    deviation values.

    These objects should be copied over from the template.js file in this folder and
    then edited accordingly.

*/

// const inputArray = [
//     {
//         // This is the template for a force type that does not have any "attributes"
//         name: "Task 1.1",
//         handleType: "Key",
//         modifiers: [],
//         forceCount: 1,
//         forceMagnitude: 1,
//         forceDuration: 1,
//         hand: "Right"
//     },
//     {
//         name: "Task 1.2",
//         handleType: "Door Knob",
//         modifiers: [],
//         forceCount: 1,
//         forceMagnitude: 1,
//         forceDuration: 1,
//         hand: "Left"
//     },
//     {
//         name: "Task 1.3",
//         handleType: "Ridged Knob",
//         modifiers: [],
//         forceCount: 1,
//         forceMagnitude: 1,
//         forceDuration: 1,
//         hand: "Right"
//     },
//     {
//         name: "Task 1.4",
//         handleType: "Tap",
//         modifiers: [],
//         forceCount: 1,
//         forceMagnitude: 1,
//         forceDuration: 1,
//         hand: "Left"
//     },
//     {
//         name: "Task 1.5",
//         handleType: "Wing Nut",
//         modifiers: [],
//         forceCount: 1,
//         forceMagnitude: 1,
//         forceDuration: 1,
//         hand: "Left"
//     },
//     {
//         name: "Task 2",
//         handleType: "L-Shaped",
//         modifiers: ["Counter-clockwise"],
//         forceCount: 1,
//         forceMagnitude: 1,
//         forceDuration: 1,
//         hand: "Right"
//     },
//     {
//         name: "Task 3",
//         handleType: "Jar Lid",
//         modifiers: ["Knurled", "1.8 inch diameter"],
//         forceCount: 1,
//         forceMagnitude: 1,
//         forceDuration: 1,
//         hand: "Left"
//     },
//     {
//         name: "Task 4",
//         handleType: "Round Knob",
//         modifiers: ["Smooth", "0.75 inch diameter"],
//         forceCount: 1,
//         forceMagnitude: 1,
//         forceDuration: 1,
//         hand: "Left"
//     },
//     {
//         name: "Task 5.1",
//         handleType: "Regular Screwdriver",
//         modifiers: ["Clockwise", "Hand-shake (Neutral)"],
//         forceCount: 1,
//         forceMagnitude: 1,
//         forceDuration: 1,
//         hand: "Right"
//     },
//     {
//         name: "Task 5.2",
//         handleType: "Pistol Grip Screwdriver",
//         modifiers: ["Counter-clockwise", "Palm-up (60 degrees Supinated)"],
//         forceCount: 1,
//         forceMagnitude: 1,
//         forceDuration: 1,
//         hand: "Left"
//     },
//     {
//         name: "Task 6",
//         handleType: "T-Handle",
//         modifiers: ["Elbow Angle 90 degrees", "Clockwise", "Palm-down (75% Range of Motion)"],
//         forceCount: 1,
//         forceMagnitude: 1,
//         forceDuration: 1,
//         hand: "Right"
//     },
//     {
//         name: "Task 7",
//         handleType: "Cylindrical Handle",
//         modifiers: ["Smooth", "Outward", "2.3 inch diameter"],
//         forceCount: 1,
//         forceMagnitude: 1,
//         forceDuration: 1,
//         hand: "Right"
//     }
// ];


const inputArr = [
    {
        // This is the template for a handle type that does not have any "modifiers"
        "Name": "Task One",
        "Handle Type": "Key",
        "Modifiers": [],
        "Force Count": 1,
        "Force Magnitude": 1,
        "Force Duration": 1,
        "Hand": "Right"
    },
    {
        // This is the template for the L-Shaped handle type
        "Name": "Task Two",
        "Handle Type": "L-Shaped",
        "Modifiers": ["Counter-clockwise"],
        "Force Count": 1,
        "Force Magnitude": 1,
        "Force Duration": 1,
        "Hand": "Left"
    },{
        // This is the template for the Jar Lid handle type
        "Name": "Task Three",
        "Handle Type": "Jar Lid",
        "Modifiers": ["Knurled", "2.6 inch diameter"],
        "Force Count": 1,
        "Force Magnitude": 1,
        "Force Duration": 1,
        "Hand": "Right"
    },{
        // This is the template for the Round Knob handle type
        "Name": "Task Four",
        "Handle Type": "Round Knob",
        "Modifiers": ["Smooth", "0.125 inch diameter"],
        "Force Count": 1,
        "Force Magnitude": 1,
        "Force Duration": 1,
        "Hand": "Right"
    },{
        // This is the template for either of the two screwdriver handle types (regular / pistol grip)
        "Name": "Task Five",
        "Handle Type": "Regular Screwdriver",
        "Modifiers": ["Clockwise", "Palm-up (60 degrees Supinated)"],
        "Force Count": 1,
        "Force Magnitude": 1,
        "Force Duration": 1,
        "Hand": "Right"
    },{
        // This is the template for the T-Handle handle type
        "Name": "Task Six",
        "Handle Type": "T-Handle",
        "Modifiers": ["Elbow Angle 135 degrees", "Counter-clockwise", "Hand-shake (Neutral)"],
        "Force Count": 1,
        "Force Magnitude": 1,
        "Force Duration": 1,
        "Hand": "Right"
    },{
        // This is the template for the Cylindrical Handle handle type
        "Name": "Task Seven",
        "Handle Type": "Cylindrical Handle",
        "Modifiers": ["Smooth", "Outward", "3.3 inch diameter"],
        "Force Count": 1,
        "Force Magnitude": 1,
        "Force Duration": 1,
        "Hand": "Left"
    }
    
]

console.log(inputArr)

for (const obj in inputArr) {
    console.log(obj)
}

/* */

let inputArray = []

fetch("input.json")
.then(response => response.json())
.then(data => {
    for (const item of data) {
        const input = {}
        input["Name"] = item["Name"]
        input["Handle Type"] = item["Handle Type"]
        input["Modifiers"] = item["Modifiers"]
        input["Force Count"] = item["Force Count"]
        input["Force Magnitude"] = item["Force Magnitude"]
        input["Force Duration"] = item["Force Duration"]
        input["Hand"] = item["Hand"]

        console.log(input)

        inputArray.push(input)
    }
})

console.log(inputArray)

/*  PART 2: createTasks FUNCTION

    The following section of code contains three functions:

        1. createTasks - This function takes the parameter 'input' and 
            returns the 'outputArray' array which contains the task objects.

            How it works: it runs a 'for' loop, which iterates through each 
            object in the input array.  For each item, it calls the 'findValues' function.

        2. findValues - This function navigates the handle type tree to find the task's
            appropriate set of mean and standard deviation values. It takes the 
            parameters 'handleTypes', 'force', 'modifiers', and 'hand'. 
            'handleTypes' refers to the object handleTypesObject which is passed down in 
            its entirety from the parent function.
            'force' refers to the name of the specific handle type submitted through the 
            user's input.
            'modifiers' parameter is an array of strings passed as an attribute through 
            the user's input. This contains all of the modifiers that this function needs 
            to traverse the handleTypes tree.
            'hand' is a string (also an attribute from the user input) that indicated which 
            hand is performing the task.


            How it works: The function runs a switch case that evaluates the 'force' parameter.
            When a match is made, the function runs the block of code specific to the
            handle type associated with the task being evaluated. Each block of code contained
            in each 'case' of the switch statement references the mean and standard deviation
            values associated with the handle type and the modifiers given by the user for the
            specific task. Depending on the tree structure of the individual handle type object,
            the code block will add additional 'keys' to the reference it makes. These keys will
            contain the string text entered in the 'modifiers' array, read one at a time in the
            order that they are entered (important that they are entered in the correct order).

        3. makeOutput - This function serves to create the 'output' array of objects which will 
            be returned by the transform function and ultimately stored at 'const tasks'.
            Parameters include the index (current input object we are making a task for), 
            input (the full array of objects), and variables for each of the male and female
            mean and standard deviation values.

            This function returns an object for each 'task', which is pushed to the output array
            that is created in the transform function.


*/

function createTasks(input) {

    let outputArray = new Array();

    for (let i = 0; i < input.length; i++) {

        maleMean = 0;
        maleStdDev = 0;
        femaleMean = 0;
        femaleStdDev = 0;
        
        findValues(handleTypes[input[i]["Handle Type"]], input[i]["Handle Type"], input[i]["Modifiers"], input[i]["Hand"])

        if (maleMean === null || maleStdDev === null || femaleMean === null || femaleStdDev === null) {
            console.log("Could not calculate one of the mean or standard deviation values for task number " + (i+1) + ".")
            console.log("Check the modifiers entered for this task and try again.\n")
        } else if (maleMean === 0 || maleStdDev === 0 || femaleMean === 0 || femaleStdDev === 0) {
            console.log("The handle type entered for task number " + (i+1) + " is invalid.\n")
        } else {
            outputArray.push(makeOutput(i, input, maleMean, maleStdDev, femaleMean, femaleStdDev))
        }

    };

    return outputArray;
};

function findValues(force, handleType, modifiers, hand) {

    switch (handleType) {
        case 'Key':
            maleMean = force["Male"].mean
            maleStdDev = force["Male"].stdDev
            femaleMean = force["Female"].mean
            femaleStdDev = force["Female"].stdDev
            break
        case 'Door Knob':
            maleMean = force["Male"].mean
            maleStdDev = force["Male"].stdDev
            femaleMean = force["Female"].mean
            femaleStdDev = force["Female"].stdDev
            break
        case 'L-Shaped':
            maleMean = force[hand][modifiers[0]]["Male"].mean
            maleStdDev = force[hand][modifiers[0]]["Male"].stdDev
            femaleMean = force[hand][modifiers[0]]["Female"].mean
            femaleStdDev = force[hand][modifiers[0]]["Female"].stdDev
            break
        case 'Ridged Knob':
            maleMean = force["Male"].mean
            maleStdDev = force["Male"].stdDev
            femaleMean = force["Female"].mean
            femaleStdDev = force["Female"].stdDev
            break
        case 'Tap':
            maleMean = force["Male"].mean
            maleStdDev = force["Male"].stdDev
            femaleMean = force["Female"].mean
            femaleStdDev = force["Female"].stdDev
            break
        case 'Wing Nut':
            maleMean = force["Male"].mean
            maleStdDev = force["Male"].stdDev
            femaleMean = force["Female"].mean
            femaleStdDev = force["Female"].stdDev
            break
        case 'Jar Lid':
            maleMean = force[modifiers[0]][modifiers[1]]["Male"].mean
            maleStdDev = force[modifiers[0]][modifiers[1]]["Male"].stdDev
            femaleMean = force[modifiers[0]][modifiers[1]]["Female"].mean
            femaleStdDev = force[modifiers[0]][modifiers[1]]["Female"].stdDev
            break
        case 'Round Knob':
            maleMean = force[modifiers[0]][modifiers[1]]["Male"].mean
            maleStdDev = force[modifiers[0]][modifiers[1]]["Male"].stdDev
            femaleMean = force[modifiers[0]][modifiers[1]]["Female"].mean
            femaleStdDev = force[modifiers[0]][modifiers[1]]["Female"].stdDev
            break
        case 'Regular Screwdriver':
            maleMean = force[hand][modifiers[0]][modifiers[1]]["Male"].mean
            maleStdDev = force[hand][modifiers[0]][modifiers[1]]["Male"].stdDev
            femaleMean = force[hand][modifiers[0]][modifiers[1]]["Female"].mean
            femaleStdDev = force[hand][modifiers[0]][modifiers[1]]["Female"].stdDev
            break
        case 'Pistol Grip Screwdriver':
            maleMean = force[hand][modifiers[0]][modifiers[1]]["Male"].mean
            maleStdDev = force[hand][modifiers[0]][modifiers[1]]["Male"].stdDev
            femaleMean = force[hand][modifiers[0]][modifiers[1]]["Female"].mean
            femaleStdDev = force[hand][modifiers[0]][modifiers[1]]["Female"].stdDev
            break
        case 'T-Handle':
            maleMean = force[hand][modifiers[0]][modifiers[1]][modifiers[2]]["Male"].mean
            maleStdDev = force[hand][modifiers[0]][modifiers[1]][modifiers[2]]["Male"].stdDev
            femaleMean = force[hand][modifiers[0]][modifiers[1]][modifiers[2]]["Female"].mean
            femaleStdDev = force[hand][modifiers[0]][modifiers[1]][modifiers[2]]["Female"].stdDev
            break
        case 'Cylindrical Handle':
            maleMean = force[hand][modifiers[0]][modifiers[1]][modifiers[2]]["Male"].mean
            maleStdDev = force[hand][modifiers[0]][modifiers[1]][modifiers[2]]["Male"].stdDev
            femaleMean = force[hand][modifiers[0]][modifiers[1]][modifiers[2]]["Female"].mean
            femaleStdDev = force[hand][modifiers[0]][modifiers[1]][modifiers[2]]["Female"].stdDev
            break
        default:
    }
};

function makeOutput(index, input, maleMean, maleStdDev, femaleMean, femaleStdDev) {

    let output = new Object();

    output.Task = (index + 1);
    output.TaskName = input[index]["Name"];
    output.Hand = input[index]["Hand"];
    output.ForceType = input[index]["Handle Type"];
    output.ForceMagnitude = input[index]["Force Magnitude"];
    output.ForceCount = input[index]["Force Count"];
    output.ForceDuration = input[index]["Force Duration"];

    output.MaleMean = maleMean;
    output.MaleStdDev = maleStdDev;
    output.FemaleMean = femaleMean;
    output.FemaleStdDev = femaleStdDev;

    return output;

};

/*  PART 3: tasks ARRAY (storing the output)

    This part is the final thing that will need to be copied. It contains
    4 GLOBAL variables, one for each of the male and female mean and standard deviation values.

    Below the initialization of these 4 variables, we will create a 'const tasks' and store the 
    return value of the createTasks function there (just like in mod 1). This will create your tasks
    array, which will be used directly by your calculator.

*/

let maleMean;
let maleStdDev;
let femaleMean;
let femaleStdDev;

const tasks = createTasks(inputArray);

/*  For my use only! Do not copy anything below this comment.
    The stuff below is purely for my use in testing the components above.
*/

console.log(tasks);