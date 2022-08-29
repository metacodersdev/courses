import { Course, Topic } from "../../../dataMockup/DataMockupInterface";
import { concat, uniqBy } from "../../../pkgs/lodash";

export const topicsGetInteractor = (data: Course[]): Topic[] => {
  const topics = concat(...data.map((item) => item.topics));
  return uniqBy(topics, (topic) => topic.topic_name);
};
