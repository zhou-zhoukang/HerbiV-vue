<script setup>
defineProps({
	chemicalData: {
		type: Array,
		required: true
	}
})
</script>

<template>
	<div>
		<el-table :data="chemicalData"
							stripe border fit style="width: 100%"
							height="400"
							highlight-current-row
		>
			<el-table-column fixed prop="id" label="HVCID" width="100"/>
			<el-table-column fixed prop="name" label="名称" width="400"/>
			<el-table-column prop="casID" label="casID" width="100"/>
			<el-table-column prop="pubChemId" label="pubChemId" width="140"/>
			<el-table-column prop="herbId" label="herbId" width="140"/>
			<el-table-column prop="drugBankId" label="drugBankId" width="140"/>
			<el-table-column prop="stitchId" label="stitchId" width="150"/>
			<el-table-column prop="smiles" label="SMILES" width="2000"/>
		</el-table>
	</div>
</template>


