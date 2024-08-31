<template>
  <div class="py-[50px] mx-auto max-w-[1255px] px-[20px]">
    <h1 class="text-center mb-[45px] text-[36px]">
      Select <span class="text-[#02A0A0]">PRODUCTS</span> Sub Category
    </h1>

    <div class="p-5 rounded-md shadow-2xl bg-white border-gray-200 border-[1px]">
      <span class="uppercase font-semibold">Choose a category</span>
      <div class="lg:w-1/3 w-full mt-4" :aria-hidden="true">
        <TieredMenu :model="items" class="w-full hidden lg:block">
          <template #item="{ item, props, hasSubmenu }">
            <a v-ripple class="flex items-center" v-bind="props.action"
               @click="handleClick(item)">
              <span :class="item.icon"/>
              <span class="ml-2">{{ item.label }}</span>
              <i v-if="hasSubmenu" class="pi pi-angle-right ml-auto"></i>
            </a>
          </template>
        </TieredMenu>
        <PanelMenu :model="items" class="w-full lg:!hidden">
          <template #item="{ item }" :aria-hidden="true">
            <a v-ripple class="flex items-center px-4 py-2 cursor-pointer group"
               @click="handleClick(item)">
              <span :class="[item.icon, 'text-primary group-hover:text-inherit']"/>
              <span :class="['ml-2', { 'font-semibold': item.items }]">{{ item.label }}</span>
              <Badge v-if="item.badge" class="ml-auto" :value="item.badge"/>
              <span v-if="item.shortcut"
                    class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
                  item.shortcut
                }}</span>
            </a>
          </template>
        </PanelMenu>
      </div>
    </div>

    <Dialog v-model:visible="visible" modal header="Edit Profile" :style="{ width: '25rem' }">
      <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
      <div class="flex items-center gap-4 mb-4">
        <label for="username" class="font-semibold w-24">Username</label>
        <InputText id="username" class="flex-auto" autocomplete="off"/>
      </div>
      <div class="flex items-center gap-4 mb-8">
        <label for="email" class="font-semibold w-24">Email</label>
        <InputText id="email" class="flex-auto" autocomplete="off"/>
      </div>
      <div class="flex justify-end gap-2">
        <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
        <Button type="button" label="Save" @click="visible = false"></Button>
      </div>
    </Dialog>

  </div>
</template>

<script setup lang='ts'>
const items = ref([
  {
    label: 'Beauty of Skin',
    icon: 'pi pi-file',
    items: [
      {
        label: 'Radiant Complexion',
        items: [
          {
            label: 'Glowing skin',
          },
          {
            label: 'Healthy luminosity',
          },
          {
            label: 'Natural radiance',
          },
          {
            label: 'Youthful brightness',
          },
          {
            label: 'Dewy appearance',
          },
          {
            label: 'Other',
          }
        ]
      },
      {
        label: 'Skin Texture Smoothness',
        items: [
          {
            label: 'Silk-like softness',
          },
          {
            label: 'Pore refinement',
          },
          {
            label: 'Flawless finish',
          },
          {
            label: 'Velvety touch',
          },
          {
            label: 'Even skin tone',
          },
          {
            label: 'Other',
          }
        ]
      },
      {
        label: 'Hydration and Moisture',
        items: [
          {
            label: 'Supple and plump',
          },
          {
            label: 'Moisture retention',
          },
          {
            label: 'Deep hydration',
          },
          {
            label: 'Nourished skin',
          },
          {
            label: 'Dewy suppleness',
          },
          {
            label: 'Other',
          }
        ]
      },
      {
        label: 'Skin Clarity and Clearness',
        items: [
          {
            label: 'Blemish-free beauty',
          },
          {
            label: 'Clear complexion',
          },
          {
            label: 'Transparent skin',
          },
          {
            label: 'Pimple-free radiance',
          },
          {
            label: 'Spotless skin',
          },
          {
            label: 'Other',
          }
        ]
      },
      {
        label: 'Elasticity and Firmness',
        items: [
          {
            label: 'Resilient skin',
          },
          {
            label: 'Firm and toned',
          },
          {
            label: 'Youthful bounce',
          },
          {
            label: 'Elastic suppleness',
          },
          {
            label: 'Tightened appearance',
          },
          {
            label: 'Other',
          }
        ]
      }
    ]
  },
  {
    label: 'Bags',
    icon: 'pi pi-cloud',
    items: [
      {
        label: 'Tote Bags',
        items: [
          {
            label: 'Spacious and versatile',
          },
          {
            label: 'Ideal for everyday use',
          },
          {
            label: 'Durable materials available',
          },
          {
            label: 'Fashionable designs',
          },
          {
            label: 'Other',
          }
        ]
      },
      {
        label: 'Backpacks',
        items: [
          {
            label: 'Hands-free carrying option',
          },
          {
            label: 'Great for commuting or travel',
          },
          {
            label: 'Various sizes and styles',
          },
          {
            label: 'Comfortable shoulder straps',
          },
          {
            label: 'Other',
          }
        ]
      },
      {
        label: 'Crossbody Bags',
        items: [
          {
            label: 'Adjustable crossbody strap',
          },
          {
            label: 'Compact and easy to carry',
          },
          {
            label: 'Perfect for on-the-go',
          },
          {
            label: 'Stylish and functional',
          },
          {
            label: 'Other',
          }
        ]
      },
      {
        label: 'Clutch Purses',
        items: [
          {
            label: 'Small and elegant',
          },
          {
            label: 'Evening or formal events',
          },
          {
            label: 'Minimalist design',
          },
          {
            label: 'Often handheld',
          },
          {
            label: 'Other',
          },
        ]
      },
      {
        label: 'Messenger Bags',
        items: [
          {
            label: 'Single shoulder strap',
          },
          {
            label: 'Satchel-style design',
          },
          {
            label: 'Popular for work or school',
          },
          {
            label: 'Multiple compartments',
          },
          {
            label: 'Other',
          },
        ]
      },
      {
        label: 'Duffel Bags',
        items: [
          {
            label: 'Large and spacious',
          },
          {
            label: 'Great for travel or sports',
          },
          {
            label: 'Easy access to belongings',
          },
          {
            label: 'Sturdy handles and straps',
          },
          {
            label: 'Other',
          },
        ]
      },
      {
        label: 'Hobo Bags',
        items: [
          {
            label: 'Slouchy, crescent shape',
          },
          {
            label: 'Casual and bohemian style',
          },
          {
            label: 'Comfortable to carry',
          },
          {
            label: 'Roomy interior',
          },
          {
            label: 'Other',
          }
        ]
      },
      {
        label: 'Satchel Bags',
        items: [
          {
            label: 'Structured and chic',
          },
          {
            label: 'Top handle and crossbody strap',
          },
          {
            label: 'Professional appearance',
          },
          {
            label: 'Organized compartments',
          },
          {
            label: 'Other',
          },
        ]
      },
      {
        label: 'Bucket Bags',
        items: [
          {
            label: 'Unique bucket shape',
          },
          {
            label: 'Drawstring closure',
          },
          {
            label: 'Trendy and spacious',
          },
          {
            label: 'Casual yet fashionable',
          },
          {
            label: 'Other',
          },
        ]
      },
      {
        label: 'Wallets and Pouches',
        items: [
          {
            label: 'Compact for essentials',
          },
          {
            label: 'Card slots and pockets',
          },
          {
            label: 'Convenient for small items',
          },
          {
            label: 'Often used as accessories',
          },
          {
            label: 'Other',
          },
        ]
      }
    ]
  },
  {
    label: 'Awesome Lip Care',
    icon: 'pi pi-desktop',
    items: [
      {
        label: 'Phone',
        icon: 'pi pi-mobile'
      },
      {
        label: 'Desktop',
        icon: 'pi pi-desktop'
      },
      {
        label: 'Tablet',
        icon: 'pi pi-tablet'
      }
    ]
  },
  {
    label: 'Mobile Tablets',
    icon: 'pi pi-desktop',
    items: [
      {
        label: 'Phone',
        icon: 'pi pi-mobile'
      },
      {
        label: 'Desktop',
        icon: 'pi pi-desktop'
      },
      {
        label: 'Tablet',
        icon: 'pi pi-tablet'
      }
    ]
  },
  {
    label: 'Necklaces',
    icon: 'pi pi-desktop',
    items: [
      {
        label: 'Phone',
        icon: 'pi pi-mobile'
      },
      {
        label: 'Desktop',
        icon: 'pi pi-desktop'
      },
      {
        label: 'Tablet',
        icon: 'pi pi-tablet'
      }
    ]
  },
  {
    label: 'Clothing',
    icon: 'pi pi-desktop',
    items: [
      {
        label: 'Phone',
        icon: 'pi pi-mobile'
      },
      {
        label: 'Desktop',
        icon: 'pi pi-desktop'
      },
      {
        label: 'Tablet',
        icon: 'pi pi-tablet'
      }
    ]
  },
  {
    label: 'Bluetooth',
    icon: 'pi pi-desktop',
    items: [
      {
        label: 'Phone',
        icon: 'pi pi-mobile'
      },
      {
        label: 'Desktop',
        icon: 'pi pi-desktop'
      },
      {
        label: 'Tablet',
        icon: 'pi pi-tablet'
      }
    ]
  },
  {
    label: 'Facial Care',
    icon: 'pi pi-desktop',
    items: [
      {
        label: 'Phone',
        icon: 'pi pi-mobile'
      },
      {
        label: 'Desktop',
        icon: 'pi pi-desktop'
      },
      {
        label: 'Tablet',
        icon: 'pi pi-tablet'
      }
    ]
  },
  {
    label: 'Shoes',
    icon: 'pi pi-desktop',
    items: [
      {
        label: 'Phone',
        icon: 'pi pi-mobile'
      },
      {
        label: 'Desktop',
        icon: 'pi pi-desktop'
      },
      {
        label: 'Tablet',
        icon: 'pi pi-tablet'
      }
    ]
  },
  {
    label: 'CPU',
    icon: 'pi pi-desktop',
    items: [
      {
        label: 'Phone',
        icon: 'pi pi-mobile'
      },
      {
        label: 'Desktop',
        icon: 'pi pi-desktop'
      },
      {
        label: 'Tablet',
        icon: 'pi pi-tablet'
      }
    ]
  },
  {
    label: 'Discover Skincare',
    icon: 'pi pi-desktop',
    items: [
      {
        label: 'Phone',
        icon: 'pi pi-mobile'
      },
      {
        label: 'Desktop',
        icon: 'pi pi-desktop'
      },
      {
        label: 'Tablet',
        icon: 'pi pi-tablet'
      }
    ]
  },
  {
    label: 'Headphones',
    icon: 'pi pi-desktop',
    items: [
      {
        label: 'Phone',
        icon: 'pi pi-mobile'
      },
      {
        label: 'Desktop',
        icon: 'pi pi-desktop'
      },
      {
        label: 'Tablet',
        icon: 'pi pi-tablet'
      }
    ]
  },
  {
    label: 'Bracelets',
    icon: 'pi pi-desktop',
    items: [
      {
        label: 'Phone',
        icon: 'pi pi-mobile'
      },
      {
        label: 'Desktop',
        icon: 'pi pi-desktop'
      },
      {
        label: 'Tablet',
        icon: 'pi pi-tablet'
      }
    ]
  },
  {
    label: 'Smart Watch',
    icon: 'pi pi-desktop',
    items: [
      {
        label: 'Phone',
        icon: 'pi pi-mobile'
      },
      {
        label: 'Desktop',
        icon: 'pi pi-desktop'
      },
      {
        label: 'Tablet',
        icon: 'pi pi-tablet'
      }
    ]
  },
  {
    label: 'Earrings',
    icon: 'pi pi-desktop',
    items: [
      {
        label: 'Phone',
        icon: 'pi pi-mobile'
      },
      {
        label: 'Desktop',
        icon: 'pi pi-desktop'
      },
      {
        label: 'Tablet',
        icon: 'pi pi-tablet'
      }
    ]
  }
]);

const product = reactive({
  category: '',
  subcategory: '',
  name: '',
})

const visible = ref(false)

const handleClick = (item) => {
  if (!item.items) {
    product.name = item.label;
    visible.value = true;

    const subCategory = items.value.find((cat) =>
        cat.items?.some((sub) =>
            sub.items?.some((prod) => prod.label === item.label)
        )
    );

    if (subCategory) {
      product.category = subCategory.label;

      const foundSubCategory = subCategory.items.find((sub) =>
          sub.items?.some((prod) => prod.label === item.label)
      );

      if (foundSubCategory) {
        product.subcategory = foundSubCategory.label;
      }
    }
  }
};

</script>