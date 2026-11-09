"use client";

import { create } from "zustand";
import enrollmentsJson from "../database/enrollments.json";

export type Enrollment = (typeof enrollmentsJson)[number];

type EnrollmentsStore = {
  enrollments: Enrollment[];
  showAllCourses: boolean;
  enroll: (courseId: string, userId: string) => void;
  unenroll: (courseId: string, userId: string) => void;
  toggleShowAllCourses: () => void;
};

export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
  enrollments: enrollmentsJson,
  showAllCourses: true,
  enroll: (courseId, userId) =>
    set((state) => ({
      enrollments: [
        ...state.enrollments,
        { _id: crypto.randomUUID(), user: userId, course: courseId },
      ],
    })),
  unenroll: (courseId, userId) =>
    set((state) => ({
      enrollments: state.enrollments.filter(
        (enrollment) => !(enrollment.course === courseId && enrollment.user === userId)
      ),
    })),
  toggleShowAllCourses: () =>
    set((state) => ({
      showAllCourses: !state.showAllCourses,
    })),
}));
