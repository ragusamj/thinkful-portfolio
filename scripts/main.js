"use strict";var animationEnd="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";particlesJS.load("particles-js","../styles/particles.json",function(){console.log("callback - particles.js config loaded")}),$(".hamburger").hover(function(){$(this).addClass("animated rubberBand").one(animationEnd,function(){$(this).removeClass("animated rubberBand")})}),$(".triangle").click(function(){$(this).addClass("animated slideOutUp").one(animationEnd,function(){$(this).addClass("animated flip").one(animationEnd,function(){$(this).velocity("scroll",{duration:3500,section:".about_me",mobileHA:!1}).velocity({opacity:1}),$(this).removeClass("animated flip slideOutUp")})})}),$(".fa").hover(function(){$(this).addClass("animated wobble ease-in-out").one(animationEnd,function(){$(this).removeClass("animated wobble")})}),(new WOW).init(),$("#e").animo({animation:"fadeOutLeft",duration:.7,keep:!0},function(){$("#m").animo({animation:"fadeOutUp",duration:.7,keep:!0},function(){$("#a").animo({animation:"fadeOutDown",duration:.7,keep:!0},function(){$("#n").animo({animation:"fadeOutRight",duration:.7,keep:!0},function(){$("#u").animo({animation:"fadeOutLeft",duration:.7,keep:!0},function(){$("#e2").animo({animation:"fadeOutUp",duration:.7,keep:!0},function(){$("#l").animo({animation:"fadeOutDown",duration:.7,keep:!0},function(){},doMagicIn())})})})})})}),$("#e").animo({animation:"fadeInLeft",duration:.7},function(){$("#m").animo({animation:"fadeInUp",duration:.7},function(){$("#a").animo({animation:"fadeInDown",duration:.7},function(){$("#n").animo({animation:"fadeInLeft",duration:.7},function(){$("#u").animo({animation:"fadeInRight",duration:.7},function(){$("#e2").animo({animation:"fadeInUp",duration:.7},function(){$("#l").animo({animation:"fadeInDown",duration:.7})})})})})})});