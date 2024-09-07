<template>
  <div class="card flex max-w-[1255px] px-[20px] mx-auto justify-center py-20">
    <Stepper value="1" class="w-full" linear>
      <StepList>
        <Step value="1">Basic information</Step>
        <Step value="2">Photo & Video</Step>
        <Step value="3">Specifications</Step>
        <Step value="4">Publish</Step>
      </StepList>
      <StepPanels>
        <StepPanel v-slot="{ activateCallback }" value="1">
          <div class="flex flex-col my-10">
            <div
                class="border-2 flex-col gap-4 border-solid shadow-xl px-[100px] w-full py-[40px] border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex font-medium">
              <div class="flex flex-col gap-2 w-full">
                <label for="title">Title</label>
                <InputText
                    maxlength="70"
                    id="title"
                    v-model="title"
                    aria-describedby="username-help"
                    placeholder="70 words max"
                />
              </div>
              <div class="flex flex-col gap-2 w-full">
                <label for="description">Description</label>
                <Textarea
                    maxlength="9000"
                    id="description"
                    v-model="description"
                    class="min-h-[200px]"
                    aria-describedby="username-help"
                    placeholder="Maximum 9000 characters"
                />
              </div>
              <div class="flex flex-col gap-2">
                <label for="title">You want to rent your car</label>
                <div class="flex flex-wrap gap-4">
                  <div class="flex items-center gap-2">
                    <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese"/>
                    <label for="ingredient1">With Driver</label>
                  </div>
                  <div class="flex items-center gap-2">
                    <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom"/>
                    <label for="ingredient2">Without Driver</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex pt-6 justify-end">
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('2')"/>
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="2">
          <div class="flex flex-col my-10">
            <FileUpload class="!shadow-xl bg-white" url="/api/upload" @upload="onTemplatedUpload($event)"
                        :multiple="true"
                        accept="image/*" :maxFileSize="1000000" @select="onSelectedFiles">
              <template #header="{ chooseCallback, uploadCallback, clearCallback, files }">
                <div class="flex flex-wrap justify-between items-center flex-1 gap-4">
                  <div class="flex gap-2">
                    <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined
                            severity="secondary"></Button>
                    <Button @click="uploadEvent(uploadCallback)" icon="pi pi-cloud-upload" rounded outlined
                            severity="success" :disabled="!files || files.length === 0"></Button>
                    <Button @click="onClearTemplatingUpload(clearCallback)" icon="pi pi-times" rounded outlined
                            severity="danger"
                            :disabled="!files || files.length === 0"></Button>
                  </div>
                  <ProgressBar :value="totalSizePercent" :showValue="false" class="md:w-20rem h-1 w-full md:ml-auto">
                    <span class="whitespace-nowrap">{{ totalSize }}B / 1Mb</span>
                  </ProgressBar>
                </div>
              </template>
              <template #content="{ files, uploadedFiles, removeUploadedFileCallback, removeFileCallback }">
                <div class="flex flex-col gap-8 pt-4">
                  <div v-if="files.length > 0">
                    <h5>Pending</h5>
                    <div class="flex flex-wrap gap-4">
                      <div v-for="(file, index) of files" :key="file.name + file.type + file.size"
                           class="p-8 rounded-border flex flex-col border border-surface items-center gap-4">
                        <div>
                          <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50"/>
                        </div>
                        <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{
                            file.name
                          }}</span>
                        <div>{{ formatSize(file.size) }}</div>
                        <Badge value="Pending" severity="warn"/>
                        <Button icon="pi pi-times" @click="onRemoveTemplatingFile(file, removeFileCallback, index)"
                                outlined rounded severity="danger"/>
                      </div>
                    </div>
                  </div>

                  <div v-if="uploadedFiles.length > 0">
                    <h5>Completed</h5>
                    <div class="flex flex-wrap gap-4">
                      <div v-for="(file, index) of uploadedFiles" :key="file.name + file.type + file.size"
                           class="p-8 rounded-border flex flex-col border border-surface items-center gap-4">
                        <div>
                          <img role="presentation" :alt="file.name" :src="file.objectURL" width="100" height="50"/>
                        </div>
                        <span class="font-semibold text-ellipsis max-w-60 whitespace-nowrap overflow-hidden">{{
                            file.name
                          }}</span>
                        <div>{{ formatSize(file.size) }}</div>
                        <Badge value="Completed" class="mt-4" severity="success"/>
                        <Button icon="pi pi-times" @click="removeUploadedFileCallback(index)" outlined rounded
                                severity="danger"/>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <template #empty>
                <div class="flex items-center justify-center flex-col py-20">
                  <i class="pi pi-cloud-upload !border-2 !rounded-full !p-8 !text-4xl !text-muted-color"/>
                  <p class="mt-6 mb-0">Drag and drop files to here to upload.</p>
                </div>
              </template>
            </FileUpload>
          </div>
          <div class="flex pt-6 justify-between">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('1')"/>
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('3')"/>
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="3">
          <div class="flex flex-col h-48">
            <div
                class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
              Content II
            </div>
          </div>
          <div class="flex pt-6 justify-between">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('2')"/>
            <Button label="Next" icon="pi pi-arrow-right" iconPos="right" @click="activateCallback('4')"/>
          </div>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="4">
          <div class="flex flex-col h-48">
            <div
                class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium">
              Content II
            </div>
          </div>
          <div class="flex pt-6 justify-between">
            <Button label="Back" severity="secondary" icon="pi pi-arrow-left" @click="activateCallback('3')"/>
            <Button label="Publish" icon="pi pi-arrow-right" iconPos="right" @click="sendProductHandler"/>
          </div>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const {category, subcategory, product} = route.query

async function sendProductHandler() {
  console.log(files)
}

const $primevue = usePrimeVue();
const toast = useToast();

const totalSize = ref(0);
const totalSizePercent = ref(0);
const files = ref([]);
const uploadedFiles = ref([]);

const onRemoveTemplatingFile = (file, removeFileCallback, index) => {
  totalSize.value -= parseInt(formatSize(file.size));
  totalSizePercent.value = totalSize.value / 10;
  removeFileCallback(index);
};

const onClearTemplatingUpload = (clear) => {
  clear();
  totalSize.value = 0;
  totalSizePercent.value = 0;
};

const onSelectedFiles = (event) => {
  files.value = event.files;
  files.value.forEach((file) => {
    totalSize.value += parseInt(formatSize(file.size));
  });
};

const onRemoveUploadedFile = (index) => {
  const file = uploadedFiles.value[index];

  uploadedFiles.value.splice(index, 1);

  totalSize.value -= file.size;
  totalSizePercent.value = (totalSize.value / 1000000) * 100;
};

const uploadEvent = (callback) => {
  totalSizePercent.value = totalSize.value / 10;
  callback();
};

const onTemplatedUpload = () => {
  toast.add({severity: "info", summary: "Success", detail: "File Uploaded", life: 3000});
};

const formatSize = (bytes) => {
  const k = 1024;
  const dm = 3;
  const sizes = $primevue.config.locale.fileSizeTypes;

  if (bytes === 0) {
    return `0 ${sizes[0]}`;
  }

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

  return `${formattedSize} ${sizes[i]}`;
};
</script>