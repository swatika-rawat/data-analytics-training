# Data Analytics using Elastic Stack

## Softwares Required:
1. Git 2.25 [download](https://git-scm.com/)
1. Any Git client (or commands) to clone this repository [download](https://tortoisegit.org/download/)
1. Java 8 or above. For this session we will be using Open JDK 13, you may use any version of JDK [download](https://adoptopenjdk.net/?variant=openjdk13&jvmVariant=hotspot)
1. Elasticsearch 7.6 (zip) [download](https://www.elastic.co/start)
1. Logstash 7.6 (zip) [download](https://www.elastic.co/downloads/logstash)
1. Kibana 7.6 (zip) [download](https://www.elastic.co/start)
1. Any Modern Text Editor like Atom, Sublime Text, Visual Studio Code, Brackets etc. For this session we will be using Atom [download](https://atom.io/)

## Setup:
### Elasticsearch
1. Extract the zip at D:\elk
1. Go to D:\elk\elasticsearch-7.6.0\bin and execute elasticsearch.bat
1. Open http://localhost:9200 in browser to verify that Elasticsearch is running

### Logstash:
1. Extract the zip at D:\elk
1. Add logstash bin directory to PATH
1. (Optional) Install logstash-output-jdbc plugin [link](https://github.com/theangryangel/logstash-output-jdbc)

###Kibana:
1. Extract the zip at D:\elk
1. Go to D:\elk\kibana-7.6.0-windows-x86_64\bin and execute kibana.bat
1. Open http://localhost:5601 in browser and verify that Kibana is running

### Atom:
1. Install following packages in Atom which will make it easier for us to work with CSV and Logstash config files. In Atom go to File -> Settings -> Install
    1. language-logstash
    1. rainbow-CSV

###Training Setup:
1. Extract datasets.zip to D:\elk
1. Create directory "sincedb" in D:\elk
