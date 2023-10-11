<template>
    <div class="project-page container"
        v-if="targetProject">
        <ProjectPreview class="project-page__project-preview"
            :project="targetProject" />
        <ProjectSteps class="project-page__project-steps"
            :project="targetProject" />
    </div>
</template>

<script setup lang="ts">
import { projects } from "@/utils/projects-data";
import ProjectPreview from "~/components/views/cases/ProjectPreview.vue";
import ProjectSteps from "~/components/views/cases/ProjectSteps.vue";

definePageMeta({
    layout: "default"
});

const route = useRoute();
const routeProjectName = route.params.projectName;

const targetProject = projects.find(project => project.name === routeProjectName) || projects[0]


</script>

<style scoped>
.project-page {
    padding-bottom: 100px;
}

.project-page__project-preview {
    margin-top: 79px;
}

.project-page__project-steps {
    margin-top: 72px;
}
</style>