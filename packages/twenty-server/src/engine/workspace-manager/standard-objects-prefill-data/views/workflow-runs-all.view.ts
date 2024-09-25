import { ObjectMetadataEntity } from 'src/engine/metadata-modules/object-metadata/object-metadata.entity';
import { WORKFLOW_RUN_STANDARD_FIELD_IDS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-field-ids';
import { STANDARD_OBJECT_IDS } from 'src/engine/workspace-manager/workspace-sync-metadata/constants/standard-object-ids';

export const workflowRunsAllView = async (
  objectMetadataMap: Record<string, ObjectMetadataEntity>,
) => {
  return {
    name: 'All Workflow Runs',
    objectMetadataId: objectMetadataMap[STANDARD_OBJECT_IDS.workflowRun].id,
    type: 'table',
    key: 'INDEX',
    position: 0,
    icon: 'IconHistory',
    kanbanFieldMetadataId: '',
    filters: [],
    fields: [
      {
        fieldMetadataId:
          objectMetadataMap[STANDARD_OBJECT_IDS.workflowRun].fields[
            WORKFLOW_RUN_STANDARD_FIELD_IDS.name
          ],
        position: 0,
        isVisible: true,
        size: 210,
      },
      {
        fieldMetadataId:
          objectMetadataMap[STANDARD_OBJECT_IDS.workflowRun].fields[
            WORKFLOW_RUN_STANDARD_FIELD_IDS.status
          ],
        position: 1,
        isVisible: true,
        size: 150,
      },
      {
        fieldMetadataId:
          objectMetadataMap[STANDARD_OBJECT_IDS.workflowRun].fields[
            WORKFLOW_RUN_STANDARD_FIELD_IDS.startedAt
          ],
        position: 2,
        isVisible: true,
        size: 150,
      },
      {
        fieldMetadataId:
          objectMetadataMap[STANDARD_OBJECT_IDS.workflowRun].fields[
            WORKFLOW_RUN_STANDARD_FIELD_IDS.endedAt
          ],
        position: 3,
        isVisible: true,
        size: 150,
      },
    ],
  };
};
