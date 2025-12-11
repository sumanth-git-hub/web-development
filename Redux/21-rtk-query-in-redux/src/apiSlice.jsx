import  { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000'}),
    tagTypes: ['Tasks'], // instead of refetch used tagTypes
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks',
            transformResponse: (tasks) => tasks.reverse(), // to reverse the array items
            providesTags: ['Tasks'] // instead of refetch used tagTypes
        }),
        addTask: builder.mutation({
        query: (task) => ({
            url: '/tasks',
            method: 'POST',
            body: task,
        }),
        invalidatesTags: ['Tasks'], // instead of refetch used invalidatesTags

        // code to execute the optimistic update
       async onQueryStarted(task, {dispatch, queryFulfilled}) {
        const pathResults = dispatch(
            api.util.updateQueryData("getTasks", undefined, (draft) => {
                draft.unshift({id: crypto.randomUUID(),...task})
            } )
        )
        try {
            await queryFulfilled
        } catch {
            pathResults.undo()
        }
       }
    }),
    updateTask: builder.mutation({
        query: ({id, ...updatedTask}) => ({
            url: `/tasks/${id}`,
            method: 'PATCH',
            body: updatedTask
        }),
        invalidatesTags: ['Tasks'],

        async onQueryStarted({id, ...updatedTask}, {dispatch, queryFulfilled}) {
        const pathResults = dispatch(
            api.util.updateQueryData("getTasks", undefined, (taskList) => {
                const taskIndex = taskList.findIndex((el) => el.id === id)
                taskList[taskIndex] = {...taskList[taskIndex], ...updatedTask}
            } )
        )
        try {
            await queryFulfilled
        } catch {
            pathResults.undo()
        }
       }
        
    }),
    deleteTask: builder.mutation({
        query: (id) => ({
            url: `/tasks/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Tasks'],
                async onQueryStarted(id, {dispatch, queryFulfilled}) {
        const pathResults = dispatch(
            api.util.updateQueryData("getTasks", undefined, (taskList) => {
                const taskIndex = taskList.findIndex((el) => el.id === id);
                taskList.splice(taskIndex, 1)
            } )
        )
        try {
            await queryFulfilled
        } catch {
            pathResults.undo()
        }
       }
    }),
    })
    
})

export const {useGetTasksQuery, useAddTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation} = api