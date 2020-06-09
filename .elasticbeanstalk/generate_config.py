import os
from typing import List

content = """branch-defaults:
  master:
    environment: $AWS_EB_ENV_NAME
  chore/eb:
    environment: $AWS_EB_ENV_NAME
global:
  application_name: $AWS_EB_APP_NAME
  default_ec2_keyname: $AWS_EB_EC2_KEY_NAME
  default_platform: 64bit Amazon Linux 2017.09 v2.6.2 running Ruby 2.4 (Passenger Standalone)
  default_region: $AWS_REGION
  sc: git
"""
env_keys: List[str] = [word for word in content.split() if word.startswith("$")]
for key in env_keys:
  value = os.environ.get(key[1:])
  print(key + ": " + value)
  content = content.replace(key, value)

with open(os.path.join(os.path.dirname(__file__), "config.yml"), "w+") as file:
    file.write(content)
