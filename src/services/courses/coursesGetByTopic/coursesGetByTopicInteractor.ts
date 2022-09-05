import { Course } from "../../../dataMockup/DataMockupInterface";
import { filter } from "../../../pkgs/lodash";
import { coursesGetByOffset } from "../coursesGetByOffset";
import { interleaveCoursesBySite } from "../interleaveCoursesBySite";

export const coursesGetByTopicInteractor = (
  data: Course[],
  topicName: string,
  limit: number,
  offset?: number
): Course[] => {
  const courseGetByTopic = filter(data, { topics: [{ topic_name: topicName }] });

  if (!offset) {
    return interleaveCoursesBySite(courseGetByTopic);
  }

  const coursesGet = coursesGetByOffset(courseGetByTopic, limit, offset);
  return interleaveCoursesBySite(coursesGet);
};
