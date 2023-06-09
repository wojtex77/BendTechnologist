CREATE TABLE BEND_ALLOWANCE
(
    ID                  BIGINT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'Identification',
    CREATION_TIME       DATETIME                       NULL COMMENT 'Creation time',
    MODIFICATION_TIME   DATETIME                       NULL COMMENT 'Modification time',

    MATERIAL_GROUP_ID   BIGINT UNSIGNED                NOT NULL COMMENT 'Id of material group',
    TOOL_SET_ID         BIGINT UNSIGNED                NOT NULL COMMENT 'Id of toolset',
    THICKNESS_ID        BIGINT UNSIGNED                NOT NULL COMMENT 'Id of material thickness',
    ALLOWANCE_90_DEGREE FLOAT                          NOT NULL COMMENT 'Bend allowance in [mm]',

    CONSTRAINT BEND_ALLOWANCE_PK PRIMARY KEY (ID),
    CONSTRAINT BEND_ALLOWANCE_FK FOREIGN KEY (MATERIAL_GROUP_ID) REFERENCES bendTechnologist.MATERIAL_GROUP (ID) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT BEND_ALLOWANCE_FK_1 FOREIGN KEY (THICKNESS_ID) REFERENCES bendTechnologist.MATERIAL_THICKNESS (ID) ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT BEND_ALLOWANCE_FK_2 FOREIGN KEY (TOOL_SET_ID) REFERENCES bendTechnologist.TOOL_SET (ID) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_polish_ci;
