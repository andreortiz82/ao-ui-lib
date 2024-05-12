import requests
from bs4 import BeautifulSoup
import pandas as pd
from caseconverter import kebabcase
import json

components = [
  "Button",
  "Typography",
  "Divider",
  "Flex",
  "Grid",
  "Layout",
  "Space",
  "Anchor",
  "Breadcrumb",
  "Dropdown",
  "Menu",
  "Pagination",
  "Steps",
  "AutoComplete",
  "Cascader",
  "Checkbox",
  "ColorPicker",
  "DatePicker",
  "Form",
  "FloatButton",
  "Input",
  "InputNumber",
  "Mentions",
  "Radio",
  "Rate",
  "Select",
  "Slider",
  "Switch",
  "TimePicker",
  "Transfer",
  "TreeSelect",
  "Upload",
  "Avatar",
  "Badge",
  "Calendar",
  "Card",
  "Carousel",
  "Collapse",
  "Descriptions",
  "Empty",
  "Image",
  "List",
  "Popover",
  "Statistic",
  "Segmented",
  "Table",
  "Tabs",
  "Tag",
  "Timeline",
  "Tooltip",
  "Tour",
  "Tree",
  "Alert",
  "Drawer",
  "Message",
  "Modal",
  "Notification",
  "Popconfirm",
  "Progress",
  "Result",
  "Skeleton",
  "Spin",
  "Watermark",
  "Affix",
  "App",
]

for component in components:
    url = f"https://ant.design/components/{kebabcase(component)}"  # Replace with the actual URL
    response = requests.get(url)
    response.raise_for_status()  # Check for errors
    soup = BeautifulSoup(response.text, 'html.parser')
    table = soup.find('table', class_='component-api-table')
    data = {}
    for row in table.find_all('tr')[1:]:  # Skip header row (index 0)
        cols = row.find_all('td')
        data[cols[0].text] = {
            "control": { "type": cols[2].text },
            "description": cols[1].text,
            "default": cols[3].text,
        }
    json_data = json.dumps(data, indent=4)  # indent for readability
    with open(f"./components/atoms/{component}/api.js", "w") as f:
        f.write(f"// {component} Props \n\n")
        f.write(f"export const api = {json_data}")