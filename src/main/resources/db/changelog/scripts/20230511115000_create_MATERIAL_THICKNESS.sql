CREATE TABLE MATERIAL_THICKNESS
(
    ID                BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL COMMENT 'Identification',
    CREATION_TIME     DATETIME                                   NULL COMMENT 'Creation time',
    MODIFICATION_TIME DATETIME                                   NULL COMMENT 'Modification time',

    THICKNESS         FLOAT                                      NOT NULL COMMENT 'Material thickness in [mm]'
);
