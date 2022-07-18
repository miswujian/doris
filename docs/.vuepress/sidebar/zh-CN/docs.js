/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = [
  {
    title: "快速开始",
    directoryPath: "get-starting/",
    initialOpenGroupIndex: -1,
    children: [
      "get-starting"
    ],
  },
  {
    title: "Doris架构",
    directoryPath: "summary/",
    initialOpenGroupIndex: -1,
    children: [
      "basic-summary",
      "system-architecture"
    ],
  },
  {
    title: "安装部署",
    directoryPath: "install/",
    initialOpenGroupIndex: -1,
    children: [
      "install-deploy",
      {
        title: "源码编译",
        directoryPath: "source-install/",
        initialOpenGroupIndex: -1,
        children: [
          "compilation",
          "compilation-with-ldb-toolchain",
          "compilation-arm"
        ],
        sidebarDepth: 2,
      },
    ]
  },
  {
    title: "数据表设计",
    directoryPath: "data-table/",
    initialOpenGroupIndex: -1,
    children: [
      "data-model",
      "data-partition",
      "basic-usage",
      "advance-usage",
      "hit-the-rollup",
      "best-practice",
      {
        title: "索引",
        directoryPath: "index/",
        initialOpenGroupIndex: -1,
        children: [
          "bloomfilter",
          "prefix-index",
          "bitmap-index"
        ],
      },
    ],
  },
  {
    title: "数据操作",
    directoryPath: "data-operate/",
    initialOpenGroupIndex: -1,
    children: [
      {
        title: "数据导入",
        directoryPath: "import/",
        initialOpenGroupIndex: -1,
        children: [
          "load-manual",
          {
            title: "按场景导入",
            directoryPath: "import-scenes/",
            initialOpenGroupIndex: -1,
            children: [
              "local-file-load",
              "external-storage-load",
              "kafka-load",
              "external-table-load",
              "jdbc-load",
              "load-atomicity",
              "load-data-convert",
              "load-strict-mode", 
            ],
          },
          {
            title: "按方式导入",
            directoryPath: "import-way/",
            initialOpenGroupIndex: -1,
            children: [
              "binlog-load-manual",
              "broker-load-manual",
              "routine-load-manual",
              "spark-load-manual",
              "stream-load-manual",
              "s3-load-manual",
              "insert-into-manual",
              "load-json-format", 
            ],
          },                
        ],
      },
      {
        title: "Export导出",
        directoryPath: "export/",
        initialOpenGroupIndex: -1,
        children: [
          "export-manual",
          "outfile",
          "export_with_mysql_dump",
        ],
      },
      {
        title: "数据更新及删除",
        directoryPath: "update-delete/",
        initialOpenGroupIndex: -1,
        children: [
          "update",
          "sequence-column-manual",
          "delete-manual",
          "batch-delete-manual"
        ],
      },
    ],
  },
  {
    title: "进阶使用",
    directoryPath: "advanced/",
    initialOpenGroupIndex: -1,
    children: [
      "materialized-view",
      {
        title: "表结构变更",
        directoryPath: "alter-table/",
        initialOpenGroupIndex: -1,
        children: [
          "schema-change"
        ],
      },
      {
        title: "Doris表分区",
        directoryPath: "partition/",
        initialOpenGroupIndex: -1,
        children: [
          "dynamic-partition",
          "table-tmp-partition"
        ],
      },
      {
        title: "Join优化",
        directoryPath: "join-optimization/",
        initialOpenGroupIndex: -1,
        children: [
          "bucket-shuffle-join",
          "colocation-join",
          "runtime-filter",
          "doris-join-optimization"
        ],
      },
      {
        title: "数据缓存",
        directoryPath: "cache/",
        initialOpenGroupIndex: -1,
        children: [
          "partition-cache"
        ],
      },
      "vectorized-execution-engine",
      "broker",
      "resource",
      "orthogonal-bitmap-manual",
      "using-hll",
      "variables",
      "time-zone",
      "small-file-mgr",
      {
          title: "最佳实践",
          directoryPath: "best-practice/",
          initialOpenGroupIndex: -1,
          children: [
            "query-analysis",
            "import-analysis",
            "debug-log"
          ],
      }
    ],
  },
  {
    title: "生态扩展",
    directoryPath: "ecosystem/",
    initialOpenGroupIndex: -1,
    children: [
      {
        title: "扩展表",
        directoryPath: "external-table/",
        initialOpenGroupIndex: -1,
        children: [
          "doris-on-es",
          "odbc-of-doris",
          "hive-of-doris",
          "iceberg-of-doris",
          "hudi-external-table"
        ],
      },
      "audit-plugin",
      "flink-doris-connector",
      "spark-doris-connector",
      "datax",
      "logstash",
      {
        title: "Doris Manager",
        directoryPath: "doris-manager/",
        initialOpenGroupIndex: -1,
        children: [
          "compiling-deploying",
          "initializing",
          "cluster-managenent",
          "space-list",
          "space-management",
          "system-settings"
        ],
      },
      {
        title: "SeaTunnel",
        directoryPath: "seatunnel/",
        initialOpenGroupIndex: -1,
        children: [
          "flink-sink",
          "spark-sink"
        ],
      },
      {
        title: "自定义函数",
        directoryPath: "udf/",
        initialOpenGroupIndex: -1,
        children: [
          "native-user-defined-function",
          "remote-user-defined-function",
          "contribute-udf",
          "java-user-defined-function"
        ],
      },
    ],
  },
  {
    title: "SQL手册",
    directoryPath: "sql-manual/",
    initialOpenGroupIndex: -1,
    children: [
      {
        title: "SQL 函数",
        directoryPath: "sql-functions/",
        initialOpenGroupIndex: -1,
        children: [
          {
            title: "日期函数",
            directoryPath: "date-time-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "convert_tz",
              "curdate",
              "current_timestamp",
              "curtime",
              "date_add",
              "date_format",
              "date_sub",
              "datediff",
              "day",
              "dayname",
              "dayofmonth",
              "dayofweek",
              "dayofyear",
              "from_days",
              "from_unixtime",
              "hour",
              "makedate",
              "minute",
              "month",
              "monthname",
              "now",
              "second",
              "str_to_date",
              "time_round",
              "timediff",
              "timestampadd",
              "timestampdiff",
              "to_days",
              "unix_timestamp",
              "utc_timestamp",
              "week",
              "weekday",
              "weekofyear",
              "year",
              "yearweek",
            ],
          },
          {
            title: "地理位置函数",
            directoryPath: "spatial-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "st_astext",
              "st_circle",
              "st_contains",
              "st_distance_sphere",
              "st_geometryfromtext",
              "st_linefromtext",
              "st_point",
              "st_polygon",
              "st_x",
              "st_y",
            ],
          },
          {
            title: "字符串函数",
            directoryPath: "string-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "append_trailing_char_if_absent",
              "ascii",
              "bit_length",
              "char_length",
              "concat",
              "concat_ws",
              "ends_with",
              "find_in_set",
              "hex",
              "instr",
              "lcase",
              "left",
              "length",
              "locate",
              "lower",
              "lpad",
              "ltrim",
              "money_format",
              "null_or_empty",
              "repeat",
              "replace",
              "reverse",
              "right",
              "rpad",
              "split_part",
              "starts_with",
              "strleft",
              "strright",
              "substring",
              "unhex",
              {
                title: "模糊匹配",
                directoryPath: "like/",
                initialOpenGroupIndex: -1,
                children: [
                  "like",
                  "not_like",
                ],
              },
              {
                title: "正则匹配",
                directoryPath: "regexp/",
                initialOpenGroupIndex: -1,
                children: [
                  "regexp",
                  "regexp_extract",
                  "regexp_replace",
                  "not_regexp",
                ],
              },
            ],
          },
          {
            title: "聚合函数",
            directoryPath: "aggregate-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "approx_count_distinct",
              "avg",
              "bitmap_union",
              "count",
              "group_concat",
              "hll_union_agg",
              "max",
              "max_by",
              "min",
              "min_by",
              "percentile",
              "percentile_approx",
              "stddev",
              "stddev_samp",
              "sum",
              "topn",
              "var_samp",
              "variance",
            ],
          },
          {
            title: "bitmap函数",
            directoryPath: "bitmap-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "bitmap_and",
              "bitmap_contains",
              "bitmap_empty",
              "bitmap_from_string",
              "bitmap_has_any",
              "bitmap_has_all",
              "bitmap_hash",
              "bitmap_intersect",
              "bitmap_or",
              "bitmap_and_count",
              "bitmap_or_count",
              "bitmap_xor",
              "bitmap_xor_count",
              "bitmap_not",
              "bitmap_and_not",
              "bitmap_and_not_count",
              "bitmap_subset_in_range",
              "bitmap_subset_limit",
              "sub_bitmap",
              "bitmap_to_string",
              "bitmap_union",
              "bitmap_xor",
              "to_bitmap",
              "bitmap_max",
              "intersect_count",
              "orthogonal_bitmap_intersect",
              "orthogonal_bitmap_intersect_count",
              "orthogonal_bitmap_union_count",
            ],
          },
          {
            title: "bitwise函数",
            directoryPath: "bitwise-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "bitand",
              "bitor",
              "bitxor",
              "bitnot"
            ],
          },
          {
            title: "条件函数",
            directoryPath: "conditional-functions/",
            children: [
              "case",
              "coalesce",
              "if",
              "ifnull",
              "nvl",
              "nullif"
            ],
          },
          {
            title: "json 函数",
            directoryPath: "json-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "get_json_double",
              "get_json_int",
              "get_json_string",
              "json_array",
              "json_object",
              "json_quote",
            ],
          },
          {
            title: "Hash函数",
            directoryPath: "hash-functions/",
            initialOpenGroupIndex: -1,
            children: ["murmur_hash3_32"],
          },
          {
            title: "数学函数",
            directoryPath: "math-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "conv",
              "pmod"
            ],
          },
          {
            title: "加密和信息摘要函数",
            directoryPath: "encrypt-digest-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "aes",
              "md5",
              "md5sum",
              "sm4",
              "sm3",
              "sm3sum"
            ],
          },
          {
            title: "表函数",
            directoryPath: "table-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "explode-bitmap",
              "explode-split",
              "explode-json-array",
              "outer-combinator",
              "numbers"
            ],
          },
          {
            title: "分析（窗口）函数",
            directoryPath: "window-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "WINDOW-FUNCTION",
              "WINDOW-FUNCTION-SUM",
              "WINDOW-FUNCTION-AVG",
              "WINDOW-FUNCTION-COUNT",
              "WINDOW-FUNCTION-MIN",
              "WINDOW-FUNCTION-MAX",
              "WINDOW-FUNCTION-LEAD",
              "WINDOW-FUNCTION-LAG",
              "WINDOW-FUNCTION-RANK",
              "WINDOW-FUNCTION-DENSE-RANK",
              "WINDOW-FUNCTION-FIRST-VALUE",
              "WINDOW-FUNCTION-LAST-VALUE",
              "WINDOW-FUNCTION-ROW-NUMBER",
              "WINDOW-FUNCTION-NTILE",
            ],
          },
          {
            title: "Array函数",
            directoryPath: "array-functions/",
            initialOpenGroupIndex: -1,
            children: [
              "array_contains",
              "array_position",
              "element_at",
            ],
          },
          "cast",
          "digital-masking",
        ],
      },
      {
        title: "SQL手册",
        directoryPath: "sql-reference/",
        initialOpenGroupIndex: -1,
        children: [
          {
            title: "账户管理",
            directoryPath: "Account-Management-Statements/",
            initialOpenGroupIndex: -1,
            children: [
              "CREATE-USER",
              "CREATE-ROLE",
              "DROP-ROLE",
              "DROP-USER",
              "GRANT",
              "REVOKE",
              "SET-PASSWORD",
              "SET-PROPERTY",
              "LDAP",
            ],
          },
          {
            title: "集群管理",
            directoryPath: "Cluster-Management-Statements/",
            initialOpenGroupIndex: -1,
            children: [
              "ALTER-SYSTEM-ADD-BACKEND",
              "ALTER-SYSTEM-ADD-FOLLOWER",
              "ALTER-SYSTEM-ADD-OBSERVER",
              "ALTER-SYSTEM-DECOMMISSION-BACKEND",
              "ALTER-SYSTEM-DROP-BACKEND",
              "ALTER-SYSTEM-DROP-FOLLOWER",
              "ALTER-SYSTEM-DROP-OBSERVER",
              "ALTER-SYSTEM-MODIFY-BROKER",
              "CANCEL-ALTER-SYSTEM",
            ],
          },
          {
            title: "DDL",
            directoryPath: "Data-Definition-Statements/",
            initialOpenGroupIndex: -1,
            children: [
              {
                title: "Alter",
                directoryPath: "Alter/",
                initialOpenGroupIndex: -1,
                children: [
                  "ALTER-DATABASE",
                  "ALTER-RESOURCE",
                  "ALTER-SQL-BLOCK-RULE",
                  "ALTER-TABLE-BITMAP",
                  "ALTER-TABLE-COLUMN",
                  "ALTER-TABLE-PARTITION",
                  "ALTER-TABLE-PROPERTY",
                  "ALTER-TABLE-RENAME",
                  "ALTER-TABLE-REPLACE",
                  "ALTER-TABLE-ROLLUP",
                  "ALTER-VIEW",
                  "CANCEL-ALTER-TABLE",
                ],
              },
              {
                title: "备份及恢复",
                directoryPath: "Backup-and-Restore/",
                initialOpenGroupIndex: -1,
                children: [
                  "BACKUP",
                  "CANCEL-BACKUP",
                  "CANCEL-RESTORE",
                  "CREATE-REPOSITORY",
                  "DROP-REPOSITORY",
                  "RESTORE",
                ],
              },
              {
                title: "Create",
                directoryPath: "Create/",
                initialOpenGroupIndex: -1,
                children: [
                  "CREATE-DATABASE",
                  "CREATE-ENCRYPT-KEY",
                  "CREATE-FILE",
                  "CREATE-FUNCTION",
                  "CREATE-INDEX",
                  "CREATE-MATERIALIZED-VIEW",
                  "CREATE-POLICY",
                  "CREATE-RESOURCE",
                  "CREATE-SQL-BLOCK-RULE",
                  "CREATE-TABLE-LIKE",
                  "CREATE-TABLE-AS-SELECT",
                  "CREATE-TABLE",
                  "CREATE-VIEW",
                  "CREATE-EXTERNAL-TABLE",
                ],
              },
              {
                title: "Drop",
                directoryPath: "Drop/",
                initialOpenGroupIndex: -1,
                children: [
                  "DROP-DATABASE",
                  "DROP-ENCRYPT-KEY",
                  "DROP-FILE",
                  "DROP-FUNCTION",
                  "DROP-INDEX",
                  "DROP-MATERIALIZED-VIEW",
                  "DROP-RESOURCE",
                  "DROP-SQL-BLOCK-RULE",
                  "DROP-TABLE",
                  "TRUNCATE-TABLE",
                ],
              },              
            ],
          },
          {
            title: "DML",
            directoryPath: "Data-Manipulation-Statements/",
            initialOpenGroupIndex: -1,
            children: [
              {
                title: "Load",
                directoryPath: "Load/",
                initialOpenGroupIndex: -1,
                children: [
                  "ALTER-ROUTINE-LOAD",
                  "BROKER-LOAD",
                  "CANCEL-LOAD",
                  "CREATE-ROUTINE-LOAD",
                  "PAUSE-ROUTINE-LOAD",
                  "RESUME-ROUTINE-LOAD",
                  "STOP-ROUTINE-LOAD",
                  "STREAM-LOAD",
                  "PAUSE-SYNC-JOB",
                  "RESUME-SYNC-JOB",
                  "STOP-SYNC-JOB",
                  "CREATE-SYNC-JOB",
                ],
              },
              {
                title: "操作",
                directoryPath: "Manipulation/",
                initialOpenGroupIndex: -1,
                children: [
                  "DELETE",
                  "INSERT",
                  "UPDATE",
                  "SELECT",
                  "EXPORT"
                ],
              },
              "OUTFILE"             
            ],
          },
          {
            title: "数据库管理",
            directoryPath: "Database-Administration-Statements/",
            initialOpenGroupIndex: -1,
            children: [
              "ADMIN-CANCEL-REPAIR",
              "ADMIN-CHECK-TABLET",
              "ADMIN-REPAIR-TABLE",
              "ADMIN-SET-CONFIG",
              "ADMIN-SET-REPLICA-STATUS",
              "ADMIN-SHOW-CONFIG",
              "ADMIN-SHOW-REPLICA-DISTRIBUTION",
              "ADMIN-SHOW-REPLICA-STATUS",
              "ENABLE-FEATURE",
              "INSTALL-PLUGIN",
              "KILL",
              "RECOVER",
              "SET-VARIABLE",
              "UNINSTALL-PLUGIN",
            ],
          },
          {
            title: "Show",
            directoryPath: "Show-Statements/",
            initialOpenGroupIndex: -1,
            children: [
              "SHOW-ALTER",
              "SHOW-BACKENDS",
              "SHOW-BACKUP",
              "SHOW-BROKER",
              "SHOW-CHARSET",
              "SHOW-COLLATION",
              "SHOW-COLUMNS",
              "SHOW-CREATE-DATABASE",
              "SHOW-CREATE-FUNCTION",
              "SHOW-CREATE-ROUTINE-LOAD",
              "SHOW-CREATE-TABLE",
              "SHOW-CREATE-MATERIALIZED-VIEW",
              "SHOW-DATA",
              "SHOW-DATA-SKEW",
              "SHOW-DATABASE-ID",
              "SHOW-DATABASES",
              "SHOW-DELETE",
              "SHOW-DYNAMIC-PARTITION",
              "SHOW-ENCRYPT-KEY",
              "SHOW-ENGINES",
              "SHOW-EVENTS",
              "SHOW-EXPORT",
              "SHOW-FRONTENDS",
              "SHOW-FUNCTIONS",
              "SHOW-GRANTS",
              "SHOW-INDEX",
              "SHOW-LOAD-PROFILE",
              "SHOW-LOAD-WARNINGS",
              "SHOW-LOAD",
              "SHOW-MIGRATIONS",
              "SHOW-OPEN-TABLES",
              "SHOW-PARTITION-ID",
              "SHOW-PARTITIONS",
              "SHOW-PLUGINS",
              "SHOW-PROC",
              "SHOW-PROCEDURE",
              "SHOW-PROCESSLIST",
              "SHOW-PROPERTY",
              "SHOW-QUERY-PROFILE",
              "SHOW-REPOSITORIES",
              "SHOW-RESOURCES",
              "SHOW-RESTORE",
              "SHOW-ROLES",
              "SHOW-ROLLUP",
              "SHOW-ROUTINE-LOAD-TASK",
              "SHOW-ROUTINE-LOAD",
              "SHOW-SMALL-FILES",
              "SHOW-SNAPSHOT",
              "SHOW-SQL-BLOCK-RULE",
              "SHOW-STATUS",
              "SHOW-STREAM-LOAD",
              "SHOW-SYNC-JOB",
              "SHOW-TABLE-ID",
              "SHOW-TABLES",			  
              "SHOW-TABLE-STATUS",
              "SHOW-TABLET",
              "SHOW-TRANSACTION",
              "SHOW-TRIGGERS",
              "SHOW-TRASH",
              // "SHOW-USER",
              "SHOW-VARIABLES",
              "SHOW-VIEW",
              "SHOW-WARNING",
              "SHOW-WHITE-LIST",
            ],
          },
          {
            title: "数据类型",
            directoryPath: "Data-Types/",
            initialOpenGroupIndex: -1,
            children: [
              "BIGINT",
              "BITMAP",
              "BOOLEAN",
              "CHAR",
              "DATE",
              "DATETIME",
              "DECIMAL",
              "DOUBLE",
              "FLOAT",
              "HLL",
              "INT",
              "LARGEINT",              
              "SMALLINT",
              "STRING",
              "TINYINT",
              "VARCHAR",
              "ARRAY",
            ],
          },
          {
            title: "辅助命令",
            directoryPath: "Utility-Statements/",
            initialOpenGroupIndex: -1,
            children: [
              "DESCRIBE",
              "HELP",
              "USE"
            ],
          },
        ],
      },
    ],
  },
  {
    title: "管理手册",
    directoryPath: "admin-manual/",
    initialOpenGroupIndex: -1,
    children: [
      {
        title: "集群管理",
        directoryPath: "cluster-management/",
        initialOpenGroupIndex: -1,
        children: [
           "upgrade",
           "elastic-expansion",
           "load-balancing"
        ],
      },
      {
        title: "数据管理",
        directoryPath: "data-admin/",
        initialOpenGroupIndex: -1,
        children: [
          "backup",
          "restore",
          "delete-recover"
        ],
      },
      "sql-interception",
      "query-profile",
      "tracing",
      "optimization",
      {
        title: "运维监控",
        directoryPath: "maint-monitor/",
        initialOpenGroupIndex: -1,
        children: [
          {
            title: "监控指标",
            directoryPath: "monitor-metrics/",
            initialOpenGroupIndex: -1,
            children: [
              "fe-metrics",
              "be-metrics"
            ],
          },
          "disk-capacity",
          "metadata-operation",
          "tablet-meta-tool",
          "tablet-local-debug",
          "tablet-repair-and-balance",
          "tablet-restore-tool",
          "monitor-alert",
          "doris-error-code",
          "be-olap-error-code"
        ],
      },
      {
        title: "配置管理",
        directoryPath: "config/",
        initialOpenGroupIndex: -1,
        children: [
          "fe-config",
          "be-config",
          "user-property"
        ],
      },
      {
        title: "用户权限及认证",
        directoryPath: "privilege-ldap/",
        initialOpenGroupIndex: -1,
        children: [
          "user-privilege",
          "ldap"
        ],
      },
      "multi-tenant",
      {
        title: "HTTP API",
        directoryPath: "http-actions/",
        initialOpenGroupIndex: -1,
        children: [
          {
            title: "FE",
            directoryPath: "fe/",
            initialOpenGroupIndex: -1,
            children: [
              {
                title: "MANAGER",
                directoryPath: "manager/",
                initialOpenGroupIndex: -1,
                children: [
                  "cluster-action",
                  "node-action",
                  "query-profile-action",
                ],
              },
              "backends-action",
              "bootstrap-action",
              "cancel-load-action",
              "check-decommission-action",
              "check-storage-type-action",
              "config-action",
              "connection-action",
              "get-ddl-stmt-action",
              "get-load-info-action",
              "get-load-state",
              "get-log-file-action",
              "get-small-file",
              "ha-action",
              "hardware-info-action",
              "health-action",
              "log-action",
              "logout-action",
              "meta-action",
              "meta-info-action",
              "meta-replay-state-action",
              "profile-action",
              "query-detail-action",
              "query-profile-action",
              "row-count-action",
              "session-action",
              "set-config-action",
              "show-data-action",
              "show-meta-info-action",
              "show-proc-action",
              "show-runtime-info-action",
              "statement-execution-action",
              "system-action",
              "table-query-plan-action",
              "table-row-count-action",
              "table-schema-action",
              "upload-action",
            ],
          },
          "cancel-label",
          "check-reset-rpc-cache",
          "compaction-action",
          "connection-action",
          "fe-get-log-file",
          "get-load-state",
          "get-tablets",
          "profile-action",
          "query-detail-action",
          "restore-tablet",
          "show-data-action",
          "tablet-migration-action",
          "tablets_distribution",
        ],
        sidebarDepth: 1,
      },
    ],
  },
  {
    title: "常见问题",
    directoryPath: "faq/",
    initialOpenGroupIndex: -1,
    children: [
      "install-faq",
      "data-faq",
      "sql-faq"
    ],
  },
  {
    title: "性能测试",
    directoryPath: "benchmark/",
    initialOpenGroupIndex: -1,
    children: [
      "ssb",
      "tpch"
    ],
  }
];
