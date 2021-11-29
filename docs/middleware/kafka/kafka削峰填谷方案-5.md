# 6. kafka削峰填谷实战方案


<a data-fancybox title="kafka" href="./image/kafka11.jpg">![kafka](./image/kafka11.jpg)</a>

MQ-client根据自己的处理能力，每隔一定时间，或者每次拉取若干条消息，实施流控，达到保护自身的效果。并且这是MQ提供的通用功能，无需上下游修改代码。


<a data-fancybox title="kafka" href="./image/kafka12.jpg">![kafka](./image/kafka12.jpg)</a>


**代码见github项目**