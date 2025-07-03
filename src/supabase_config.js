// Supabase configuration for Mission50LPA.dev
// This file sets up the Supabase client and provides utility functions

import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'YOUR_SUPABASE_URL'
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Auth helper functions
export const authHelpers = {
  // Sign up with email and password
  signUp: async (email, password, userData = {}) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData
        }
      })
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Sign in with email and password
  signIn: async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Sign in with OAuth (Google, GitHub, etc.)
  signInWithOAuth: async (provider) => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`
        }
      })
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Sign out
  signOut: async () => {
    try {
      const { error } = await supabase.auth.signOut()
      return { error }
    } catch (error) {
      return { error }
    }
  },

  // Reset password
  resetPassword: async (email) => {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      })
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Update password
  updatePassword: async (newPassword) => {
    try {
      const { data, error } = await supabase.auth.updateUser({
        password: newPassword
      })
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      const { data: { user }, error } = await supabase.auth.getUser()
      return { user, error }
    } catch (error) {
      return { user: null, error }
    }
  },

  // Get current session
  getCurrentSession: async () => {
    try {
      const { data: { session }, error } = await supabase.auth.getSession()
      return { session, error }
    } catch (error) {
      return { session: null, error }
    }
  }
}

// Database helper functions
export const dbHelpers = {
  // Profile operations
  profiles: {
    get: async (userId) => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()
      return { data, error }
    },

    update: async (userId, updates) => {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', userId)
        .select()
        .single()
      return { data, error }
    },

    create: async (profileData) => {
      const { data, error } = await supabase
        .from('profiles')
        .insert(profileData)
        .select()
        .single()
      return { data, error }
    }
  },

  // Learning entries operations
  learningEntries: {
    getAll: async (userId) => {
      const { data, error } = await supabase
        .from('learning_entries')
        .select(`
          *,
          learning_domains(name, color_hex, icon_name)
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
      return { data, error }
    },

    create: async (entryData) => {
      const { data, error } = await supabase
        .from('learning_entries')
        .insert(entryData)
        .select(`
          *,
          learning_domains(name, color_hex, icon_name)
        `)
        .single()
      return { data, error }
    },

    update: async (entryId, updates) => {
      const { data, error } = await supabase
        .from('learning_entries')
        .update(updates)
        .eq('id', entryId)
        .select(`
          *,
          learning_domains(name, color_hex, icon_name)
        `)
        .single()
      return { data, error }
    },

    delete: async (entryId) => {
      const { error } = await supabase
        .from('learning_entries')
        .delete()
        .eq('id', entryId)
      return { error }
    }
  },

  // Projects operations
  projects: {
    getAll: async (userId) => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
      return { data, error }
    },

    create: async (projectData) => {
      const { data, error } = await supabase
        .from('projects')
        .insert(projectData)
        .select()
        .single()
      return { data, error }
    },

    update: async (projectId, updates) => {
      const { data, error } = await supabase
        .from('projects')
        .update(updates)
        .eq('id', projectId)
        .select()
        .single()
      return { data, error }
    },

    delete: async (projectId) => {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', projectId)
      return { error }
    }
  },

  // Skills operations
  skills: {
    getAll: async (userId) => {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .eq('user_id', userId)
        .order('proficiency_level', { ascending: false })
      return { data, error }
    },

    create: async (skillData) => {
      const { data, error } = await supabase
        .from('skills')
        .insert(skillData)
        .select()
        .single()
      return { data, error }
    },

    update: async (skillId, updates) => {
      const { data, error } = await supabase
        .from('skills')
        .update(updates)
        .eq('id', skillId)
        .select()
        .single()
      return { data, error }
    },

    delete: async (skillId) => {
      const { error } = await supabase
        .from('skills')
        .delete()
        .eq('id', skillId)
      return { error }
    }
  },

  // Achievements operations
  achievements: {
    getAll: async (userId) => {
      const { data, error } = await supabase
        .from('achievements')
        .select('*')
        .eq('user_id', userId)
        .order('issue_date', { ascending: false })
      return { data, error }
    },

    create: async (achievementData) => {
      const { data, error } = await supabase
        .from('achievements')
        .insert(achievementData)
        .select()
        .single()
      return { data, error }
    },

    update: async (achievementId, updates) => {
      const { data, error } = await supabase
        .from('achievements')
        .update(updates)
        .eq('id', achievementId)
        .select()
        .single()
      return { data, error }
    },

    delete: async (achievementId) => {
      const { error } = await supabase
        .from('achievements')
        .delete()
        .eq('id', achievementId)
      return { error }
    }
  },

  // Friend connections operations
  friendConnections: {
    getAll: async (userId) => {
      const { data, error } = await supabase
        .from('friend_connections')
        .select(`
          *,
          requester:profiles!friend_connections_requester_id_fkey(id, username, full_name, avatar_url),
          addressee:profiles!friend_connections_addressee_id_fkey(id, username, full_name, avatar_url)
        `)
        .or(`requester_id.eq.${userId},addressee_id.eq.${userId}`)
        .order('created_at', { ascending: false })
      return { data, error }
    },

    sendRequest: async (addresseeId) => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return { data: null, error: { message: 'Not authenticated' } }

      const { data, error } = await supabase
        .from('friend_connections')
        .insert({
          requester_id: user.id,
          addressee_id: addresseeId,
          status: 'Pending'
        })
        .select()
        .single()
      return { data, error }
    },

    respondToRequest: async (connectionId, status) => {
      const { data, error } = await supabase
        .from('friend_connections')
        .update({ status })
        .eq('id', connectionId)
        .select()
        .single()
      return { data, error }
    }
  },

  // Learning domains
  learningDomains: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('learning_domains')
        .select('*')
        .eq('is_active', true)
        .order('name')
      return { data, error }
    }
  }
}

// Storage helper functions
export const storageHelpers = {
  // Upload file to storage
  uploadFile: async (bucket, path, file) => {
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(path, file, {
          cacheControl: '3600',
          upsert: false
        })
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Get public URL for file
  getPublicUrl: (bucket, path) => {
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(path)
    return data.publicUrl
  },

  // Delete file from storage
  deleteFile: async (bucket, path) => {
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .remove([path])
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  },

  // List files in bucket
  listFiles: async (bucket, folder = '') => {
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .list(folder)
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  }
}

// Real-time subscriptions
export const realtimeHelpers = {
  // Subscribe to table changes
  subscribeToTable: (table, callback, filter = {}) => {
    const subscription = supabase
      .channel(`${table}_changes`)
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table,
          ...filter 
        }, 
        callback
      )
      .subscribe()

    return subscription
  },

  // Subscribe to user-specific changes
  subscribeToUserData: (userId, callback) => {
    const subscription = supabase
      .channel('user_data_changes')
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'learning_entries',
          filter: `user_id=eq.${userId}`
        }, 
        callback
      )
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'projects',
          filter: `user_id=eq.${userId}`
        }, 
        callback
      )
      .on('postgres_changes', 
        { 
          event: '*', 
          schema: 'public', 
          table: 'skills',
          filter: `user_id=eq.${userId}`
        }, 
        callback
      )
      .subscribe()

    return subscription
  },

  // Unsubscribe from channel
  unsubscribe: (subscription) => {
    supabase.removeChannel(subscription)
  }
}

// Edge Functions helpers
export const edgeFunctionHelpers = {
  // Call calculate user stats function
  calculateUserStats: async () => {
    try {
      const { data, error } = await supabase.functions.invoke('calculate-user-stats')
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Call learning recommendations function
  getLearningRecommendations: async () => {
    try {
      const { data, error } = await supabase.functions.invoke('learning-recommendations')
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  },

  // Call friend recommendations function
  getFriendRecommendations: async () => {
    try {
      const { data, error } = await supabase.functions.invoke('friend-recommendations')
      return { data, error }
    } catch (error) {
      return { data: null, error }
    }
  }
}

// Utility functions
export const utils = {
  // Format error messages
  formatError: (error) => {
    if (!error) return null
    
    if (error.message) {
      return error.message
    }
    
    if (typeof error === 'string') {
      return error
    }
    
    return 'An unexpected error occurred'
  },

  // Check if user is authenticated
  isAuthenticated: async () => {
    const { session } = await authHelpers.getCurrentSession()
    return !!session
  },

  // Get user ID
  getUserId: async () => {
    const { user } = await authHelpers.getCurrentUser()
    return user?.id || null
  }
}

export default supabase

