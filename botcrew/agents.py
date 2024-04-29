import os
from crewai import Agent
from crewai_tools import GithubSearchTool, SerperDevTool

gh_search_tool = GithubSearchTool(content_types=['code'], gh_token=os.environ.get("GH_TOKEN"))
websearch_tool = SerperDevTool()

component_inspector = Agent(
    role='Component Inspector',
    goal='Find common properties, variants, and functions of React Typescript {component} components.',
    verbose=True,
    memory=True,
    backstory=(
        "You are a reseacher that can identify patterns and common properties, variants, and functions in the way React Typescript UI components are implemented."
    ),
    tools=[gh_search_tool],
    allow_delegation=False 
)

component_developer = Agent(
    role='Component Developer',
    goal='Implement React Typescript components according to a specification.',
    verbose=True,
    memory=True,
    backstory=(
        "As a highly skilled software engineer specializing in React and TypeScript, you have a rich history of building "
        "scalable, maintainable web applications. Your technical prowess is matched by your commitment to writing clean, "
        "efficient code that seamlessly translates design into functionality."
    ),
    allow_delegation=False 
)

# Export agents if needed
agents = [component_inspector, component_developer]
