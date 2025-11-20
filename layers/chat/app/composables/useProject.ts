import useProjects from './useProjects'
import type {Project} from "#layers/chat/app/types";

export default function useProject(projectId: string) {
    const { projects } = useProjects()

    const project = computed(() =>
        projects.value.find((p) => p.id === projectId)
    )

    function updateProject(updatedProject: Partial<Project>) {
        if(!project) return

        const index = projects.value.findIndex((p) => p.id === updatedProject.id)
        console.log('index', index)
        console.log('updated project', updatedProject)
        if(index < 0) return

        projects.value[index] = {
            ...project.value,
            ...updatedProject,
            id: projectId
        } as Project
    }

    return {
        project,
        updateProject,
    }
}
