CREATE TABLE MATERIAL
(
    ID                BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL COMMENT 'Identification',
    CREATION_TIME     DATETIME                                   NULL COMMENT 'Creation time',
    MODIFICATION_TIME DATETIME                                   NULL COMMENT 'Modification time',

    EN_10088          VARCHAR(255)                               NULL COMMENT 'European norm',
    PN                VARCHAR(255)                               NULL COMMENT 'Polish norm',
    AISI              VARCHAR(255)                               NULL COMMENT 'American norm',
    DIN               VARCHAR(255)                               NULL COMMENT 'German norm',
    GOST              VARCHAR(255)                               NULL COMMENT 'Russian norm',
    DENSITY           FLOAT                                      NULL DEFAULT 1 COMMENT 'Material density in g/cm^3'
);
