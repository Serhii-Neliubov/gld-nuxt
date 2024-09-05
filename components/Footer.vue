<template>
  <footer class="bg-black pt-[56px]">
    <div class="max-w-[1240px] pb-[25px] px-[20px] mx-auto">
      <div class="flex justify-between flex-wrap gap-[20px]">
        <div class="flex flex-col">
          <h3 class="w-full text-center text-white text-[20px] uppercase mb-[10px] font-medium">Online Shopping</h3>
          <a href="#" class="text-white hover:text-red-500 mt-[20px] transition-all">
            Furniture's
          </a>
          <nav class="flex flex-col gap-[15px] mt-[20px]">
            <a href="#" class="text-white hover:text-red-500 leading-normal transition-all">
              Men
            </a>
            <a href="#" class="text-white hover:text-red-500 leading-normal transition-all">
              Woman
            </a>
            <a href="#" class="text-white hover:text-red-500 leading-normal transition-all">
              Kids
            </a>
            <a href="#" class="text-white hover:text-red-500 leading-normal transition-all">
              Electronics
            </a>
            <a href="#" class="text-white hover:text-red-500 leading-normal transition-all">
              Jewellery
            </a>
          </nav>
        </div>
        <div class="flex flex-col">
          <h3 class="w-full text-center text-white text-[20px] uppercase mb-[10px] font-medium">Near by shops</h3>
          <nav class="flex flex-col gap-[15px] mt-[20px]">
            <a href="#" class="text-white hover:text-red-500 leading-normal transition-all">
              Near By Fashion
            </a>
            <a href="#" class="text-white hover:text-red-500 leading-normal transition-all">
              Near By Jewellery
            </a>
            <a href="#" class="text-white hover:text-red-500 leading-normal transition-all">
              Near By Furniture's
            </a>
            <a href="#" class="text-white hover:text-red-500 leading-normal transition-all">
              Near By Electronics
            </a>
            <a href="#" class="text-white hover:text-red-500 leading-normal transition-all">
              Near By All Shops
            </a>
          </nav>
        </div>
        <div class="flex max-w-[156px] flex-col gap-[15px]">
          <h3 class="w-full text-white text-[20px] uppercase mb-[10px] font-medium">help & info</h3>
          <nav class="flex flex-col gap-[15px]">
            <router-link to="/track-order" class="text-white hover:text-red-500 leading-normal transition-all">
              Track An Order
            </router-link>
            <router-link to="/contact-us" class="text-white hover:text-red-500 leading-normal transition-all">
              Contact Us
            </router-link>
            <router-link to="/faq" class="text-white hover:text-red-500 leading-normal transition-all">
              FAQs
            </router-link>
            <router-link to="/privacy-policy" class="text-white hover:text-red-500 leading-normal transition-all">
              Privacy Policy
            </router-link>
            <router-link to="/cookie-policy" class="text-white hover:text-red-500 leading-normal transition-all">
              Cookie Policy
            </router-link>
            <router-link to="/shipping-policy" class="text-white hover:text-red-500 leading-normal transition-all">
              Shipping Policy
            </router-link>
            <router-link to="/terms-conditions" class="text-white hover:text-red-500 leading-normal transition-all">
              Terms & Conditions
            </router-link>
          </nav>
          <Link to="/help-center" class="text-white hover:text-red-500 leading-normal transition-all">
            Help & Support
          </Link>
        </div>
        <div class="flex flex-col">
          <div class="flex flex-col gap-[25px] mb-[25px]">
            <h3 class="w-full text-white text-[20px] uppercase mb-[10px] font-medium">email</h3>
            <a href='mailto:contact@Gldcard.com' class="text-white">Gldcartsrcgmail.com</a>
          </div>
          <div class="flex flex-col mb-[25px]">
            <h3 class="w-full text-white text-[20px] uppercase mb-[25px] font-medium">social links</h3>
            <div class="flex gap-[15px] items-center">
              <a href="#">
                <img src='/' alt="Social"/>
              </a>
              <a href="#">
                <img src='/' alt="Social"/>
              </a>
              <a href="#">
                <img src='/' alt="Social"/>
              </a>
              <a href="#">
                <img src='/' alt="Social"/>
              </a>
            </div>
          </div>
          <div class="flex flex-col">
            <h3 class="w-full text-white text-[20px] uppercase mb-[25px] font-medium">Download App</h3>
            <div class="flex gap-[10px]">
              <a href="#">
                <img src='/' alt="Image"/>
              </a>
              <div class="flex flex-col gap-[5px]">
                <a href="#">
                  <img src='/' alt="Image"/>
                </a>
                <a href="#">
                  <img src='/' alt="Image"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='py-[25px] border-t border-solid border-white'>
      <div class="max-w-[1240px] px-[20px] mx-auto">
        <div class="flex justify-between gap-[40px] flex-wrap items-center">
          <div
              class="flex max-w-[290px] flex-col justify-center md:justify-start gap-2 w-full md:items-start items-center">
            <h4 class="text-white uppercase mb-[10px]">Trialshoopy accepts</h4>
            <div class="flex gap-8 md:gap-4">
              <img src='/' alt="Visa"/>
              <img
                  src='/'
                  alt="Master Card"
              />
              <img src='/' alt="BHIM UPI"/>
              <img src='/' alt=" R"/>
            </div>
          </div>
          <div class="flex max-w-[400px] justify-center md:justify-start gap-2 w-full items-center">
            <img src='/' alt='Icon copyright' class='w-[20px] h-[20px]'/>
            <p class='text-[#CFCFCF]'>
              2023 WWW.TrailShoppy.com. All right reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>