import { useEffect, useMemo, useState } from 'react';
import { flattenLessons, loadLessonGroups } from './lib/lessons';

const STORAGE_KEY = 'ts-dashboard-completed-lessons';

type ViewMode = 'lesson' | 'reviewer';

function renderTranscriptMarkdown(transcript: string, lessonId: string) {
  const lines = transcript.split('\n');
  const blocks: JSX.Element[] = [];
  let index = 0;
  let subHeadingCount = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith('# ')) {
      blocks.push(
        <h3 key={`${lessonId}-h3-${index}`}>{line.replace('# ', '').trim()}</h3>
      );
      index += 1;
      continue;
    }

    if (line.startsWith('## ')) {
      const headingText = line.replace('## ', '').trim();
      const headingClass =
        subHeadingCount === 0
          ? 'section-heading'
          : headingText.startsWith('Paliwanag para sa non-developer')
            ? 'explain-heading'
            : undefined;

      blocks.push(
        <h4 className={headingClass} key={`${lessonId}-h4-${index}`}>
          {headingText}
        </h4>
      );
      subHeadingCount += 1;
      index += 1;
      continue;
    }

    if (line.startsWith('Paliwanag para sa non-developer')) {
      blocks.push(
        <h4 className="explain-heading" key={`${lessonId}-explain-${index}`}>
          {line}
        </h4>
      );
      index += 1;
      continue;
    }

    if (line.startsWith('```')) {
      const language = line.replace('```', '').trim() || 'txt';
      index += 1;
      const codeLines: string[] = [];

      while (index < lines.length && !lines[index].trim().startsWith('```')) {
        codeLines.push(lines[index]);
        index += 1;
      }

      if (index < lines.length && lines[index].trim().startsWith('```')) {
        index += 1;
      }

      blocks.push(
        <figure className="code-block" key={`${lessonId}-code-${index}`}>
          <figcaption>{language}</figcaption>
          <pre>
            <code>{codeLines.join('\n')}</code>
          </pre>
        </figure>
      );
      continue;
    }

    const imageMatch = line.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (imageMatch) {
      blocks.push(
        <figure className="lesson-image" key={`${lessonId}-img-${index}`}>
          <img src={imageMatch[2]} alt={imageMatch[1] || 'Lesson visual'} />
          {imageMatch[1] && <figcaption>{imageMatch[1]}</figcaption>}
        </figure>
      );
      index += 1;
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ''));
        index += 1;
      }

      blocks.push(
        <ol className="md-list" key={`${lessonId}-ol-${index}`}>
          {items.map((item, itemIndex) => (
            <li key={`${lessonId}-ol-item-${index}-${itemIndex}`}>{item}</li>
          ))}
        </ol>
      );
      continue;
    }

    if (line.startsWith('- ')) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith('- ')) {
        items.push(lines[index].trim().replace(/^- /, ''));
        index += 1;
      }

      blocks.push(
        <ul className="md-list" key={`${lessonId}-ul-${index}`}>
          {items.map((item, itemIndex) => (
            <li key={`${lessonId}-ul-item-${index}-${itemIndex}`}>{item}</li>
          ))}
        </ul>
      );
      continue;
    }

    blocks.push(<p key={`${lessonId}-p-${index}`}>{line}</p>);
    index += 1;
  }

  return blocks;
}

function getReviewerBullets(transcript: string) {
  const candidates = transcript
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .filter((line) => !line.startsWith('#'))
    .filter((line) => !line.startsWith('!['))
    .map((line) => line.replace(/^[-\d.\s]+/, '').trim())
    .filter((line) => line.length > 18);

  const unique: string[] = [];
  for (const line of candidates) {
    if (!unique.includes(line)) {
      unique.push(line);
    }

    if (unique.length === 8) {
      break;
    }
  }

  return unique;
}

function getReviewerQuestions(transcript: string) {
  const extracted = transcript
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.endsWith('?'))
    .slice(0, 4);

  if (extracted.length > 0) {
    return extracted;
  }

  return [
    'Ano ang pinaka-main idea ng topic na ito?',
    'Anong concept ang pwede mong i-apply agad sa code mo?',
    'Anong error ang maiiwasan mo gamit ang TypeScript?',
  ];
}

function loadCompletedLessons() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return [] as string[];
  }

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? (parsed as string[]) : [];
  } catch {
    return [];
  }
}

function App() {
  const lessonGroups = useMemo(() => loadLessonGroups(), []);
  const allLessons = useMemo(() => flattenLessons(lessonGroups), [lessonGroups]);

  const [activeLessonId, setActiveLessonId] = useState<string>(
    allLessons[0]?.id ?? ''
  );
  const [viewMode, setViewMode] = useState<ViewMode>('lesson');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<string[]>(() =>
    loadCompletedLessons()
  );
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>(
    () =>
      Object.fromEntries(
        lessonGroups.map((group, index) => [group.id, index !== 0])
      ) as Record<string, boolean>
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedLessons));
  }, [completedLessons]);

  useEffect(() => {
    setCollapsedGroups((current) => {
      const nextState: Record<string, boolean> = {};
      lessonGroups.forEach((group, index) => {
        nextState[group.id] = current[group.id] ?? index !== 0;
      });
      return nextState;
    });
  }, [lessonGroups]);

  const activeIndex = allLessons.findIndex((lesson) => lesson.id === activeLessonId);
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
  const activeLesson = allLessons[safeActiveIndex];

  const hasLessons = allLessons.length > 0;
  const previousLesson = safeActiveIndex > 0 ? allLessons[safeActiveIndex - 1] : null;
  const nextLesson =
    safeActiveIndex < allLessons.length - 1
      ? allLessons[safeActiveIndex + 1]
      : null;

  const completedCount = completedLessons.filter((id) =>
    allLessons.some((lesson) => lesson.id === id)
  ).length;

  const isCurrentLessonDone = completedLessons.includes(activeLesson?.id ?? '');

  const reviewerBullets = activeLesson
    ? getReviewerBullets(activeLesson.transcript)
    : [];
  const reviewerQuestions = activeLesson
    ? getReviewerQuestions(activeLesson.transcript)
    : [];

  const toggleLessonDone = () => {
    if (!activeLesson) {
      return;
    }

    setCompletedLessons((current) => {
      if (current.includes(activeLesson.id)) {
        return current.filter((id) => id !== activeLesson.id);
      }

      return [...current, activeLesson.id];
    });
  };

  const toggleGroupCollapse = (groupId: string) => {
    setCollapsedGroups((current) => {
      const isCurrentlyCollapsed = current[groupId] ?? true;
      const nextState: Record<string, boolean> = {};

      lessonGroups.forEach((group) => {
        nextState[group.id] = true;
      });

      if (isCurrentlyCollapsed) {
        nextState[groupId] = false;
      }

      return nextState;
    });
  };

  useEffect(() => {
    if (!activeLesson) {
      return;
    }

    setCollapsedGroups(() => {
      const nextState: Record<string, boolean> = {};
      lessonGroups.forEach((group) => {
        nextState[group.id] = group.id !== activeLesson.groupId;
      });
      return nextState;
    });
  }, [activeLesson?.groupId]);

  useEffect(() => {
    if (!activeLessonId) {
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeLessonId]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  if (!hasLessons) {
    return (
      <main className="empty-state">
        <h1>Walang lessons pa sa `src/content`</h1>
        <p>
          Magdagdag ng folders at markdown files gaya ng
          `src/content/01-getting-started/01-welcome-to-the-course.md`.
        </p>
      </main>
    );
  }

  return (
    <>
      <header className="mobile-header">
        <button
          type="button"
          className={isSidebarOpen ? 'hamburger-btn open' : 'hamburger-btn'}
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          aria-controls="lesson-sidebar"
          aria-expanded={isSidebarOpen}
          aria-label="Toggle lesson menu"
        >
          <span className="hamburger-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Lessons</span>
        </button>
      </header>

      <main
        className={isSidebarOpen ? 'layout sidebar-open' : 'layout'}
        aria-label="Lesson dashboard"
      >
        <aside
          id="lesson-sidebar"
          className={isSidebarOpen ? 'sidebar card open' : 'sidebar card'}
        >
        <h1 className="sidebar-title">TypeScript Lessons</h1>
        <p className="sidebar-subtitle">Topics galing sa folders mo</p>

        <div className="overall-progress" aria-label="Overall progress">
          <p>
            Progress: {completedCount}/{allLessons.length}
          </p>
          <progress max={allLessons.length} value={completedCount} />
        </div>

        <nav aria-label="Lesson topics" className="topics-wrap">
          {lessonGroups.map((group) => (
            <section className="topic-group" key={group.id}>
              <button
                type="button"
                className="group-toggle"
                onClick={() => toggleGroupCollapse(group.id)}
                aria-expanded={!collapsedGroups[group.id]}
              >
                <span className="group-title">{group.title}</span>
                <span className="group-caret">
                  {collapsedGroups[group.id] ? '▸' : '▾'}
                </span>
              </button>

              {!collapsedGroups[group.id] && (
                <ul>
                  {group.lessons.map((lesson) => {
                    const isActive = lesson.id === activeLesson.id;
                    const isDone = completedLessons.includes(lesson.id);

                    return (
                      <li key={lesson.id}>
                        <button
                          type="button"
                          className={isActive ? 'topic active' : 'topic'}
                          onClick={() => {
                            setActiveLessonId(lesson.id);
                            setIsSidebarOpen(false);
                          }}
                        >
                          <span>{lesson.topicTitle}</span>
                          {isDone && <span className="done-mark">✓</span>}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          ))}
        </nav>
        </aside>

        <section className="viewer card">
        <header className="viewer-header">
          <p className="badge">{activeLesson.groupTitle}</p>
          <h2>{activeLesson.topicTitle}</h2>
          <p className="meta">Source: {activeLesson.sourcePath}</p>

          <div className="viewer-toolbar">
            <div className="mode-switch" role="tablist" aria-label="View mode">
              <button
                type="button"
                className={viewMode === 'lesson' ? 'mode-btn active' : 'mode-btn'}
                onClick={() => setViewMode('lesson')}
              >
                Lesson Mode
              </button>
              <button
                type="button"
                className={
                  viewMode === 'reviewer' ? 'mode-btn active' : 'mode-btn'
                }
                onClick={() => setViewMode('reviewer')}
              >
                Reviewer Mode
              </button>
            </div>

            <button
              type="button"
              className={isCurrentLessonDone ? 'mark-btn done' : 'mark-btn'}
              onClick={toggleLessonDone}
            >
              {isCurrentLessonDone ? 'Marked as done' : 'Mark as done'}
            </button>
          </div>
        </header>

        <article className="transcript" aria-label="Lesson transcript">
          {viewMode === 'lesson' &&
            renderTranscriptMarkdown(activeLesson.transcript, activeLesson.id)}

          {viewMode === 'reviewer' && (
            <section className="reviewer-view">
              <h3>Quick Reviewer</h3>
              <ul className="md-list">
                {reviewerBullets.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <h4>Self-check Questions</h4>
              <ol className="md-list">
                {reviewerQuestions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ol>
            </section>
          )}
        </article>

        <footer className="nav-controls">
          <button
            type="button"
            className="nav-btn"
            onClick={() => {
              if (!previousLesson) {
                return;
              }
              setActiveLessonId(previousLesson.id);
              setIsSidebarOpen(false);
            }}
            disabled={!previousLesson}
          >
            ← Previous
          </button>

          <p className="progress">
            {safeActiveIndex + 1} / {allLessons.length}
          </p>

          <button
            type="button"
            className="nav-btn"
            onClick={() => {
              if (!nextLesson) {
                return;
              }
              setActiveLessonId(nextLesson.id);
              setIsSidebarOpen(false);
            }}
            disabled={!nextLesson}
          >
            Next →
          </button>
        </footer>
        </section>
      </main>

      {isSidebarOpen && (
        <button
          type="button"
          className="sidebar-overlay"
          aria-label="Close sidebar"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}

export default App;
