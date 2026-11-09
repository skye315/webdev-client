
"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useAssignmentsStore } from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();

  const assignment = useAssignmentsStore((state) =>
    state.assignments.find(
      (a) => a._id === aid && a.course === cid
    )
  );

  const addAssignment = useAssignmentsStore(
    (state) => state.addAssignment
  );

  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment
  );

  const [title, setTitle] = useState(assignment?.title ?? "");
  const [description, setDescription] = useState(
    assignment?.description ?? ""
  );
  const [points, setPoints] = useState(assignment?.points ?? 100);
  const [due, setDue] = useState(assignment?.due ?? "");
  const [available, setAvailable] = useState(
    assignment?.available ?? ""
  );
  const [until, setUntil] = useState(assignment?.until ?? "");

  const handleSave = () => {
    if (aid === "new") {
      addAssignment({
        title,
        course: cid,
        description,
        points,
        due,
        available,
        until,
      });
    } else if (assignment) {
      updateAssignment({
        ...assignment,
        title,
        description,
        points,
        due,
        available,
        until,
      });
    }

    router.push(`/courses/${cid}/assignments`);
  };

  return (
    <div
      id="wd-assignments-editor"
      className="max-w-3xl space-y-4 p-4"
    >
      <div>
        <label
          htmlFor="wd-name"
          className="mb-1 block font-medium"
        >
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded border px-3 py-2"
        />
        <div className="mt-2 text-sm text-gray-600">
          Assignment id: {aid}
        </div>
      </div>

      <textarea
        id="wd-description"
        rows={6}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Assignment description"
        className="w-full rounded border px-3 py-2"
      />

      <div>
        <label
          htmlFor="wd-ai-editor-notes"
          className="mb-1 block font-medium"
        >
          Sample notes
        </label>
        <textarea
          id="wd-ai-editor-notes"
          rows={4}
          defaultValue="Review the rubric before submitting. Keep the final app deployment URL in the README."
          className="w-full rounded border px-3 py-2"
        />
      </div>

      <div className="grid grid-cols-[10rem_1fr] items-center gap-4">
        <label htmlFor="wd-points" className="text-right">
          Points
        </label>
        <input
          id="wd-points"
          type="number"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
          className="w-full rounded border px-3 py-2"
        />

        <label htmlFor="wd-group" className="text-right">
          Assignment Group
        </label>
        <select
          id="wd-group"
          defaultValue="ASSIGNMENTS"
          className="w-full rounded border px-3 py-2"
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>

        <label htmlFor="wd-display-grade-as" className="text-right">
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className="w-full rounded border px-3 py-2"
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
        </select>

        <label
          htmlFor="wd-submission-type"
          className="self-start pt-2 text-right"
        >
          Submission Type
        </label>
        <div className="space-y-3 rounded border p-4">
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className="w-full rounded border px-3 py-2"
          >
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
          </select>

          <div className="font-semibold">Online Entry Options</div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">
              Student Annotation
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>

        <div className="self-start pt-2 text-right">Assign</div>
        <div className="space-y-3 rounded border p-4">
          <div>
            <label
              htmlFor="wd-assign-to"
              className="mb-1 block font-semibold"
            >
              Assign to
            </label>
            <input
              id="wd-assign-to"
              defaultValue="Everyone"
              className="w-full rounded border px-3 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="wd-due-date"
              className="mb-1 block font-semibold"
            >
              Due
            </label>
            <input
              type="date"
              id="wd-due-date"
              value={due}
              onChange={(e) => setDue(e.target.value)}
              className="w-full rounded border px-3 py-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="wd-available-from"
                className="mb-1 block font-semibold"
              >
                Available from
              </label>
              <input
                type="date"
                id="wd-available-from"
                value={available}
                onChange={(e) => setAvailable(e.target.value)}
                className="w-full rounded border px-3 py-2"
              />
            </div>

            <div>
              <label
                htmlFor="wd-available-until"
                className="mb-1 block font-semibold"
              >
                Until
              </label>
              <input
                type="date"
                id="wd-available-until"
                value={until}
                onChange={(e) => setUntil(e.target.value)}
                className="w-full rounded border px-3 py-2"
              />
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex justify-end gap-2">
        <button
          type="button"
          id="wd-cancel"
          onClick={() => router.push(`/courses/${cid}/assignments`)}
          className="rounded bg-neutral-200 px-4 py-2"
        >
          Cancel
        </button>

        <button
          type="button"
          id="wd-save"
          onClick={handleSave}
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
