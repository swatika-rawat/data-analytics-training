# Data Analytics using Elastic Stack

## Softwares Required:
1. Java (JDK) 8 or above [download](https://adoptopenjdk.net/?variant=openjdk13&jvmVariant=hotspot)
1. Elasticsearch 7.6 (zip) [download](https://www.elastic.co/start)
1. Logstash 7.6 (zip) [download](https://www.elastic.co/downloads/logstash)
1. Kibana 7.6 (zip) [download](https://www.elastic.co/start)
1. Any relational database, for this session we will be using PostgreSQL [download](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
1. JDBC driver for the selected relational database [download](https://jdbc.postgresql.org/download.html)
1. Any Modern Text Editor like Atom, Sublime Text, Visual Studio Code, Brackets etc. For this session we will be using Atom [download](https://atom.io/)
1. Any web browser, preferably Google Chrome or Mozilla Firefox
1. Git 2.25 [download](https://git-scm.com/)
1. Any Git client (or commands) to clone this repository. You may alternatively download the repository as a zip file [download](https://tortoisegit.org/download/)

## Setup:
### Elasticsearch
1. Extract the zip at D:\elk
1. Go to D:\elk\elasticsearch-7.6.0\bin and execute elasticsearch.bat
1. Open http://localhost:9200 in browser to verify that Elasticsearch is running

### Logstash:
1. Extract the zip at D:\elk
1. Add Logstash's bin directory to PATH environment variable. (Control Panel -> System -> Advanced System Settings -> Environment Variable -> Select "PATH" -> Edit -> New -> Enter "D:\elk\logstash-7.6.0\bin" -> Ok)
1. (Optional) Install logstash-output-jdbc plugin by executing command "logstash-plugin install logstash-output-jdbc" [link](https://github.com/theangryangel/logstash-output-jdbc)

### Kibana:
1. Extract the zip at D:\elk
1. Go to D:\elk\kibana-7.6.0-windows-x86_64\bin and execute kibana.bat
1. Open http://localhost:5601 in browser and verify that Kibana is running

### Atom:
1. Install following packages in Atom which will make it easier for us to work with Logstash config and small CSV files. In Atom go to File -> Settings -> Install
    1. language-logstash
    1. rainbow-csv

### Training Setup:
1. Extract datasets.zip to D:\elk\datasets directory
1. Copy the downloaded JDBC driver jar file to D:\elk\db_drivers directory

### Dataset Sources:
1. https://www.kaggle.com/lakshyaag/india-trade-data
1. https://www.kaggle.com/sudalairajkumar/indian-startup-funding
1. https://www.kaggle.com/pavano1760/all-bollywood-movies-2019
1. https://www.kaggle.com/ruben99/air-pollution-dataset-india20162018
1. https://www.kaggle.com/anjali21/agricultural-production-india

### File System Crawler for Elasticsearch:
You need to install a fscrawler version matching your Elasticsearch version
For Elasticsearch 6.x and 7.x, you can download 2.7-SNAPSHOT [download](https://fscrawler.readthedocs.io/en/latest/installation.html)
