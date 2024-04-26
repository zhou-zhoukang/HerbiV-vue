<template>
  <p>TCM</p>
  <TCMs :tcm-data="result.tcm"/>
  <p>Target</p>
  <Proteins :tcm-data="result.protein"/>
    <p>chemical</p>
  <Chemical :tcm-data="result.chemical"/>
  <p>Chemical Target Links</p>
  <ChemicalProteinLink :tcm-data="result.chemical_protein_l"/>
  <div id="htmlContainer"></div>
</template>


<script src="">
  export default {
    name: "Detail"
  }
</script>

<script setup>
import {onMounted, reactive, ref} from "vue";
import SearchService from "@/service/search";
import TCMs from "@/components/table/TCMTable.vue";
import router from "@/router";
import Proteins from "@/components/table/ProteinTable.vue";
import ChemicalProteinLink from "@/components/table/ChemicalProteinLink.vue";
import Graph from "@/service/graph";
const type=ref(router.currentRoute.value.query.type)
const content=ref(router.currentRoute.value.query.content)
const props = defineProps({
  type: {
    type: String,
    required: true
  },
  content:{
    type:String,
    required:true
  }
})

const result = reactive(
    {
      tcm:[],
      protein:[],
      chemical:[],
      chemical_protein_l:[]
    }
)


const getResult = async ()=>{
  await SearchService.getDetail(type.value,content.value).then(res=>{
    result.tcm=eval(res.tcm)
    result.protein=eval(res.protein)
    result.chemical=eval(res.chem)
    result.chemical_protein_l=eval(res.chem_protein_l)
  })
}


function unescapeHtml(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.documentElement.textContent;
}
const getGraph = async ()=>{
  await Graph.getResult().then(res=>{
    const htmlContainer = document.getElementById('htmlContainer');
                    htmlContainer.innerHTML = res;
                    executeScripts(htmlContainer);
  })
}

async function executeScripts(container) {
            const scripts = container.getElementsByTagName('script');
            scripts.async = true
            for (let i = 1; i < scripts.length; i++) {
                await eval(scripts[i].innerHTML);
            }
        }
onMounted(
    async ()=>{
      await getResult()
      await getGraph()
    }
)
</script>


<style scoped>

</style>