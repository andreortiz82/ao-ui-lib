from dotenv import load_dotenv
from crewai import Crew, Process
from agents import component_inspector, component_developer
from tasks import component_inspector_task, component_developer_task

load_dotenv()

def main():
    # Initialize the Crew with agents and their respective tasks
    ui_crew = Crew(
        agents=[component_inspector, component_developer],
        tasks=[component_inspector_task, component_developer_task],
        process=Process.sequential  # This can be adjusted to parallel if needed
    )

    # Define the input for the tasks, in this case, it could be a project brief or specifications
    inputs = {
        'component': 'Button',
    }

    # Kick off the crew's task execution
    results = ui_crew.kickoff(inputs=inputs)
    print(results)

if __name__ == '__main__':
    main()
