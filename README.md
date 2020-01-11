# twitterlivemaps
 Twitter Live Maps with leaflet.js, python, and apache kafka 
 
Intro: 

Apache Kafka is implemented to process Twitter data streaming in real time. In contrast, streaming means that you are watching the show as the packets arrive. Stream processing is then the act of processing a continuous flow of incoming data.

![alt text](https://github.com/jenizar/twitterlivemaps/blob/master/Screenshot/TwitterWorldMap.PNG)
![alt text](https://github.com/jenizar/twitterlivemaps/blob/master/Screenshot/TwitterWorldMapTopic.PNG)

Guides:

1. Start Zookeeper server
C:\kafka\bin\windows>zookeeper-server-start.bat ../../config/zookeeper.properties

2. Start Kafka server
C:\kafka\bin\windows>kafka-server-start.bat ../../config/server.properties

3. Create topic
C:\kafka\bin\windows>kafka-topics.bat --zookeeper localhost:2181 --topic twitterdata --create --partitions 1 --replication-factor 1

4. Check & Verified the topic
C:\kafka\bin\windows>kafka-topics.bat --zookeeper 0.0.0.0:2181 --topic twitterdata --describe

5. Run frontend.py

6. Run twitter.py

Attention:

If your kafka server not working to start, you can clear data logs in each topics folder in directory C:\tmp\kafka-logs (windows)

References:
1. https://github.com/code-and-dogs/twitterLiveMaps
2. https://www.youtube.com/watch?v=a5MZN9u-8LA
3. https://kafka.apache.org/quickstart
4. https://pykafka.readthedocs.io/en/latest/ 
