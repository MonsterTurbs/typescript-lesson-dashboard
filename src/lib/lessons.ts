export type Lesson = {
  id: string;
  groupId: string;
  groupTitle: string;
  topicTitle: string;
  transcript: string;
  sourcePath: string;
};

export type LessonGroup = {
  id: string;
  title: string;
  lessons: Lesson[];
};

type RawLessonModules = Record<string, string>;

const rawLessonFiles = import.meta.glob('../content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as RawLessonModules;

function slugToTitle(slug: string): string {
  const sectionMatch = slug.match(/^(\d+)[-_]?(.*)$/);
  const sectionNumber = sectionMatch?.[1];
  const rawTitle = sectionMatch?.[2] ?? slug;

  const title = rawTitle
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (ch) => ch.toUpperCase())
    .trim();

  if (sectionNumber) {
    return `Section ${Number(sectionNumber)}: ${title}`;
  }

  return title;
}

function extractTopicTitle(fileName: string, transcript: string): string {
  const firstLine = transcript
    .split('\n')
    .map((line) => line.trim())
    .find((line) => line.length > 0);

  if (firstLine?.startsWith('#')) {
    return firstLine.replace(/^#+\s*/, '').trim();
  }

  return slugToTitle(fileName.replace(/\.md$/i, ''));
}

function sortByPath(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

export function loadLessonGroups(): LessonGroup[] {
  const grouped = new Map<string, LessonGroup>();

  Object.keys(rawLessonFiles)
    .sort(sortByPath)
    .forEach((filePath) => {
      const cleanPath = filePath.replace('../content/', '');
      const segments = cleanPath.split('/');

      if (segments.length < 2) {
        return;
      }

      const groupId = segments[0];
      const fileName = segments[segments.length - 1];
      const transcript = rawLessonFiles[filePath].trim();
      const groupTitle = slugToTitle(groupId);
      const topicTitle = extractTopicTitle(fileName, transcript);
      const lessonId = `${groupId}/${fileName}`;

      const group =
        grouped.get(groupId) ??
        ({
          id: groupId,
          title: groupTitle,
          lessons: [],
        } satisfies LessonGroup);

      group.lessons.push({
        id: lessonId,
        groupId,
        groupTitle,
        topicTitle,
        transcript,
        sourcePath: cleanPath,
      });

      grouped.set(groupId, group);
    });

  return Array.from(grouped.values()).sort((a, b) => sortByPath(a.id, b.id));
}

export function flattenLessons(groups: LessonGroup[]): Lesson[] {
  return groups.flatMap((group) => group.lessons);
}
