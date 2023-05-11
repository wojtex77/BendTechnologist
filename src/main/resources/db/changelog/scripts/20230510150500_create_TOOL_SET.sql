CREATE TABLE TOOL_SET
(
    ID                BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL COMMENT 'Identification',
    CREATION_TIME     DATETIME                                   NULL COMMENT 'Creation time',
    MODIFICATION_TIME DATETIME                                   NULL COMMENT 'Modification time',

    PUNCH_NAME        VARCHAR(255)                               NULL COMMENT 'Punch name',
    DIE_NAME          VARCHAR(255)                               NULL COMMENT 'Die name',
    PUNCH_RADIUS      FLOAT                                      NULL COMMENT 'Punch radius',
    DIE_WIDTH         FLOAT                                      NULL COMMENT 'Die width'
);
