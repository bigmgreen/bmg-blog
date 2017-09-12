<template>
    <div>
        <div class="login">
            <div class="wrap">
                <div v-title>登录页</div>
                <form id="loginForm">
                    <div class="name">
                        <input type="text" name="name" placeholder="用户名" maxlength="10">
                    </div>
                    <div class="pwd">
                        <input type="password" name="pwd" placeholder="密码" maxlength="20">
                    </div>
                    <button type="submit">登录</button>
                </form>
            </div>
        </div>
        <div id="particlesJs" class="bgi"></div>
    </div>
</template>

<script>
    import "../../static/lib/particles/particles.js";
    export default {
        name: 'login',
        mounted () {
            console.log('rendered~');
            particlesJS('particlesJs',
                    {
                        "particles": {
                            "number": {
                                "value": 80,
                                "density": {
                                    "enable": true,
                                    "value_area": 800
                                }
                            },
                            "color": {
                                "value": "#ffffff"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                                "image": {
                                    "src": "img/github.svg",
                                    "width": 100,
                                    "height": 100
                                }
                            },
                            "opacity": {
                                "value": 0.5,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 5,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 40,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 150,
                                "color": "#ffffff",
                                "opacity": 0.4,
                                "width": 1
                            },
                            "move": {
                                "enable": true,
                                "speed": 6,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                },
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 400,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 400,
                                    "size": 40,
                                    "duration": 2,
                                    "opacity": 8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 200
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true,
                        "config_demo": {
                            "hide_card": false,
                            "background_color": "#b61924",
                            "background_image": "",
                            "background_position": "50% 50%",
                            "background_repeat": "no-repeat",
                            "background_size": "cover"
                        }
                    }
            );
        }
    }
</script>

<style scoped>
    .login {
        height: 300px;
    }

    .bgi {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.22);
        top: 0;
        left: 0;
        z-index: 8;
    }

    form {
        text-align: center;
        background-color: #f9f9f9;
        border-radius: 50%;
        padding: 1em;
        height: 300px;
        width: 300px;
        box-sizing: border-box;
        padding-top: 5em;
        position: relative;
        z-index: 10;
    }

    form div {
        height: 30px;
        margin: 20px 0;
        border-bottom: 1px solid transparent;
        position: relative;
    }

    form div:hover {
        border-bottom: 1px solid #eee;
    }

    input {
        width: 100%;
        height: 100%;
        border: 0 none;
        text-align: center;
    }

    input:-webkit-autofill {
        box-shadow: 0 0 0 1000px #f9f9f9 inset !important;
    }

    .name:before {
        content: '用户名';
    }

    .pwd:before,
    .name:before {
        font-size: 12px;
        position: absolute;
        top: 8px;
        left: 36px;
        color: #aaa;
    }

    .pwd:before {
        content: '密码';
        letter-spacing: 1.3em;
    }

    button {
        border: 0 none;
        background-color: rgba(239, 103, 42, 0.79);
        color: #fff;
        display: block;
        margin: 0 auto;
        padding: 2em 2em;
        font-size: 15px;
        cursor: pointer;
        border-radius: 50%;
    }

    button:hover {
        background-color: rgba(239, 103, 42, 0.4);
    }

    @keyframes rotate {
        0% {
            transform: rotate(90deg);
        }
        10% {
            transform: rotate(126deg);
        }
        20% {
            transform: rotate(162deg);
        }
        30% {
            transform: rotate(198deg);
        }
        40% {
            transform: rotate(234deg);
        }
        50% {
            transform: rotate(270deg);
        }
        60% {
            transform: rotate(306deg);
        }
        70% {
            transform: rotate(342deg);
        }
        80% {
            transform: rotate(18deg);
        }
        90% {
            transform: rotate(54deg);
        }
        100% {
            transform: rotate(90deg);
        }
    }

    .wrap {
        height: 300px;
        width: 300px;
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 10;
        margin-left: -150px;
        margin-top: -150px;
    }

    .wrap:after {
        animation: rotate 10s infinite;
        transform: rotate(90deg);
        transform-origin: 50%;
        top: 49%;
        left: -4%;
    }

    .wrap:before {
        animation: rotate 10s infinite alternate-reverse;
        transform-origin: 50%;
        top: 49%;
        left: -4%;
    }

    .wrap:after,
    .wrap:before {
        content: '';
        display: block;
        position: absolute;
        height: 10px;
        background-color: #fff;
        z-index: 9;
        width: 320px;
        border-radius: 50%;
    }
</style>
