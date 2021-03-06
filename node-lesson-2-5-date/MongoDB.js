/**
 * mongoDB的安装与部署
 * 是一个分布式文件存储的数据库
 * 性能高,部署和运维简单
 */

/**
 * 安装和部署的两种方式
 */

/**
 * 1.采用复制集
 * MonggoDB
 * 复制集通常由三个对等的节点构成
 * 有primary 和secondary等多种角色
 * primary负责 读/写请求
 * secondary紧跟并应用写操作
 * 如果primary 失效,则集群进行 多数派选举,选举出primary
 * 复制集是mongo集合的最小部署单位
 * 解决了单点故障问题,分片集群中每个shard节点也可以使用复制集提高数据的可用性
 * 对数据库进行扩容是非常痛苦的事情
 */

/**
 * 采用分片集群
 * 为了解决上诉复制集的问题
 * 我们需要采用分片模式。将整个集合(collection)中的数据根据分片键 分别存储到多个MongoDB节点上
 * 即让那个每个节点持有集合的一部分数据,每个节点持有集合的一部分数据,集群持有全部数据
 * 原则上可以支持TB级数据，
 * 这种方式应对高并发,超大数据量场景时,效果是非常好的 
 * 
 */
/**
 * 在对 系统进行配置时需要注意以下几点
 * 
 */
/**
 * 建议将MongoDB部署在Linux系统上,选择较高的版本,以及的合适的底层文件系统,开启合适的SWag空间
 * 无论是采用MMAPv1还是WiredTiger引擎,较大的内存总能带来直接的好处
 * 关闭数据存储文件的atime选项(表示文件最近被访问的时间,每次访问文件时这个时间都会改)
 * 可以提高文件访问效果
 * 调整ulimit参数,在给予网络I/O或者磁盘 I/O进行操作的应用中,通常要调整这个参数,主要是为了上调系统运行打开的文件个数
 */
