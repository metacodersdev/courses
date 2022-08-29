import { Course } from "../../../dataMockup/DataMockupInterface";
import { filter } from "../../../pkgs/lodash";

export const coursesGetByTopicInteractor = (
  data: Course[],
  topicName: string
): Course[] => {
  return filter(data, { topics: [{ topic_name: topicName }] });
};
