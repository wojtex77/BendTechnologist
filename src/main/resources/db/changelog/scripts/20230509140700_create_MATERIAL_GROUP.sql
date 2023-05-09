CREATE TABLE MATERIAL_GROUP
(
    ID                BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL COMMENT 'Identification',
    CREATION_TIME     DATETIME                                   NULL COMMENT 'Creation time',
    MODIFICATION_TIME DATETIME                                   NULL COMMENT 'Modification time',

    SHORT_NAME        VARCHAR(255)                               NOT NULL COMMENT 'Short name for group',
    FULL_NAME         VARCHAR(255)                               NULL COMMENT 'Full name for group'
);
