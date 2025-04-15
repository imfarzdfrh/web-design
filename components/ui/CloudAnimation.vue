<template>
    <div class="relative">
      <!-- Stormy Icon -->
      <div class="stormy"></div>
    </div>
  </template>
  
  
  <style scoped>
  /* STORMY */
  .stormy {
    @apply absolute rounded-full bg-[#222222];
    width: 50px;
    height: 50px;
    margin-left: -50px;
    left: 500px;
    top: 70px;
    animation: stormy 5s ease-in-out infinite;
    box-shadow: 
      #222222 65px -15px 0 -5px, 
      #222222 25px -25px, 
      #222222 30px 10px, 
      #222222 60px 15px 0 -10px, 
      #222222 85px 5px 0 -5px;
  }
  
  .stormy:after {
    content: '';
    @apply absolute bg-black rounded-full;
    width: 120px;
    height: 15px;
    opacity: 0.2;
    left: 5px;
    bottom: -60px;
    transform: scale(.7);
    animation: stormy_shadow 5s ease-in-out infinite;
  }
  
  .stormy:before {
    content: '';
    @apply absolute;
    width: 0;
    height: 0;
    border-left: 0 solid transparent;
    border-right: 7px solid transparent;
    border-top: 43px solid yellow;
    box-shadow: yellow -7px -32px;
    left: 57px;
    top: 70px;
    transform: rotate(14deg);
    transform-origin: 50% -60px;
    animation: stormy_thunder 2s steps(1, end) infinite;
  }
  
  @keyframes stormy {
    50% { transform: translateY(-20px); } 
  }
  
  @keyframes stormy_shadow {
    50% { transform: translateY(20px) scale(1); opacity: 0.05; }
  }
  
  @keyframes stormy_thunder {
    0%  { transform: rotate(20deg); opacity: 1; }
    5%  { transform: rotate(-34deg); opacity: 1; }
    10% { transform: rotate(0deg); opacity: 1; }
    15% { transform: rotate(-34deg); opacity: 0; }
  }
  </style>
  