export interface ExerciseEntry {
    name: string;
    folder: string;
}

export const exercisesList: ExerciseEntry[] = [
    { name: 'Creating Observables', folder: 'creating' },
    { name: 'Window resize: Observables from events', folder: 'fromevent' },
    { name: 'Game Score: scan and reduce', folder: 'game-score' },
    { name: 'Multicasting with Subjects', folder: 'multicast' },
    { name: 'How to unsubscribe and avoid memory leaks', folder: 'unsubscribe' },
    { name: 'Chat: Merging Observables', folder: 'chat' },
    { name: 'Higher Order Observables with concatMap, mergeMap, switchMap, exhaustMap', folder: 'higherorder' },
];
