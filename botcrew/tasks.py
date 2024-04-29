from crewai import Task
from agents import component_inspector, component_developer

component_inspector_task = Task(
    description=(
        "Research a {component} component and generate a specification developers can use to implement."
    ),
    expected_output=(
        "A specification containing the types, properities, and functions for a {component} component."
    ),
    agent=component_inspector,
    tools=component_inspector.tools,  
    async_execution=False,
)

component_developer_task = Task(
    description=(
        "Develop the {component} component according to the provided specifications. Use TypeScript for type safety "
        "and ensure that components are fully functional. Pay "
        "attention to reusability and modularity of the components."
    ),
    expected_output=(
        "A component.tsx file containing the {component} component."
    ),
    agent=component_developer,
    tools=component_developer.tools,  
    async_execution=False,
    output_file='component.tsx'
)

tasks = [component_inspector_task, component_developer_task]
