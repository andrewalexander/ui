const mappings = {
"FileSystem": {
  "Files": [
    "sys_close",
    "sys_creat",
    "sys_open",
    "sys_openat",
    "sys_name_to_handle_at",
    "sys_open_by_handle_at",
    "sys_memfd_create",
    "sys_mknod",
    "sys_mknodat",
    "sys_rename",
    "sys_renameat",
    "sys_renameat2",
    "sys_truncate",
    "sys_ftruncate",
    "sys_fallocate",
  ],
  "Directories": [
    "sys_mkdir",
    "sys_mkdirat",
    "sys_rmdir",
    "sys_getcwd",
    "sys_chdir",
    "sys_fchdir",
    "sys_chroot",
    "sys_getdents",
    "sys_getdents64",
    "sys_lookup_dcookie",
  ],
  "Links": [
    "sys_link",
    "sys_linkat",
    "sys_symlink",
    "sys_symlinkat",
    "sys_unlink",
    "sys_unlinkat",
    "sys_readlink",
    "sys_readlinkat",
  ],
  "BasicAttributes": [
    "sys_umask",
    "sys_stat",
    "sys_lstat",
    "sys_fstat",
    "sys_newfstatat",
    "sys_chmod",
    "sys_fchmod",
    "sys_fchmodat",
    "sys_chown",
    "sys_lchown",
    "sys_fchown",
    "sys_fchownat",
    "sys_utime",
    "sys_utimes",
    "sys_futimesat",
    "sys_utimensat",
    "sys_access",
    "sys_faccessat",
    "sys_statx",
  ],
  "ExtendedAttributes": [
    "sys_setxattr",
    "sys_lsetxattr",
    "sys_fsetxattr",
    "sys_getxattr",
    "sys_lgetxattr",
    "sys_fgetxattr",
    "sys_listxattr",
    "sys_flistxattr",
    "sys_removexattr",
    "sys_lremovexattr",
    "sys_fremovexattr",
    "sys_keyctl",
    "sys_add_key",
  ],
  "Descriptors": [
    "sys_ioctl",
    "sys_fcntl",
    "sys_dup",
    "sys_dup2",
    "sys_dup3",
    "sys_flock",
  ],
  "ReadWrite": [
    "sys_read",
    "sys_readv",
    "sys_pread64",
    "sys_preadv",
    "sys_write",
    "sys_writev",
    "sys_pwrite64",
    "sys_pwritev",
    "sys_lseek",
    "sys_sendfile",
  ],
  "SynchronizedIO": [
    "sys_fdatasync",
    "sys_fsync",
    "sys_msync",
    "sys_sync_file_range",
    "sys_sync",
    "sys_syncfs",
  ],
  "AsynchronousIO": [
    "sys_io_setup",
    "sys_io_destroy",
    "sys_io_submit",
    "sys_io_cancel",
    "sys_io_getevents",
  ],
  "MultiplexedIO": [
    "sys_select",
    "sys_pselect6",
    "sys_poll",
    "sys_ppoll",
    "sys_epoll_create",
    "sys_epoll_create1",
    "sys_epoll_ctl",
    "sys_epoll_wait",
    "sys_epoll_pwait",
  ],
  "Monitoring": [
    "sys_inotify_init",
    "sys_inotify_init1",
    "sys_inotify_add_watch",
    "sys_inotify_rm_watch",
    "sys_fanotify_init",
    "sys_fanotify_mark",
  ],
  "MiscellaneousFiles": [
    "sys_fadvise64",
    "sys_readahead",
    "sys_getrandom",
  ],
},
  "Network": {
    "Sockets": [
      "sys_socket",
      "sys_socketpair",
      "sys_getsockopt",
      "sys_setsockopt",
      "sys_getsockname",
      "sys_getpeername",
      "sys_bind",
      "sys_listen",
      "sys_accept",
      "sys_accept4",
      "sys_connect",
      "sys_shutdown",
    ],
    "IO": [
      "sys_recvfrom",
      "sys_recvmsg",
      "sys_recvmmsg",
      "sys_sendto",
      "sys_sendmsg",
      "sys_sendmmsg",
    ],
    "Naming": [
      "sys_sethostname",
      "sys_setdomainname",
    ],
    "Filtering": [
      "sys_bpf",
    ],
  },
  "Time": {
    "TimeOfDay": [
      "sys_time",
      "sys_settimeofday",
      "sys_gettimeofday",
    ],
    "POSIXClocks": [
      "sys_clock_settime",
      "sys_clock_gettime",
      "sys_clock_getres",
      "sys_clock_adjtime",
      "sys_clock_nanosleep",
    ],
    "ClockTimers": [
      "sys_timer_create",
      "sys_timer_delete",
      "sys_timer_settime",
      "sys_timer_gettime",
      "sys_timer_getoverrun",
    ],
    "SysTimers": [
      "sys_alarm",
      "sys_setitimer",
      "sys_getitimer",
    ],
    "FileDescriptorTimers": [
      "sys_timerfd_create",
      "sys_timerfd_settime",
      "sys_timerfd_gettime",
    ],
    "MiscellaneousTime": [
      "sys_adjtimex",
      "sys_nanosleep",
      "sys_times",
    ],
  },
  "System": {
    "Kernel": [
      "sys_create_module",
      "sys_init_module",
      "sys_finit_module",
      "sys_delete_module",
      "sys_get_kernel_syms",
    ],
    "Accounting": [
      "sys_acct",
      "sys_quotactl",
    ],
    "PrivlidgedFileSystem": [
      "sys_pivot_root",
      "sys_swapon",
      "sys_swapoff",
      "sys_mount",
      "sys_umount2",
      "sys_nfsservctl",
    ],
    "UnprivledgedFileSystem": [
      "sys_ustat",
      "sys_statfs",
      "sys_fstatfs",
      "sys_sysfs",
    ],
    "MiscellaneousSystem": [
      "sys__sysctl",
      "sys_syslog",
      "sys_ioperm",
      "sys_iopl",
      "sys_personality",
      "sys_vhangup",
      "sys_reboot",
      "sys_kexec_load",
      "sys_kexec_file_load",
      "sys_perf_event_open",
      "sys_uname",
      "sys_sysinfo",
    ],
  },
  "Signals": {
    "Standard": [
      "sys_kill",
      "sys_tkill",
      "sys_tgkill",
      "sys_pause",
    ],
    "RealTime": [
      "sys_rt_sigaction",
      "sys_rt_sigprocmask",
      "sys_rt_sigpending",
      "sys_rt_sigqueueinfo",
      "sys_rt_tgsigqueueinfo",
      "sys_rt_sigtimedwait",
      "sys_rt_sigsuspend",
      "sys_rt_sigreturn",
      "sys_sigaltstack",
    ],
    "FileDescriptor": [
      "sys_signalfd",
      "sys_signalfd4",
      "sys_eventfd",
      "sys_eventfd2",
    ],
    "MiscellaneousSignals": [
      "sys_restart_syscall",
    ],
  },
  "IPC": {
    "Pipes": [
      "sys_pipe",
      "sys_pipe2",
      "sys_tee",
      "sys_splice",
      "sys_vmsplice",
    ],
    "SharedMemory": [
      "sys_shmget",
      "sys_shmctl",
      "sys_shmat",
      "sys_shmdt",
    ],
    "Semaphore": [
      "sys_semget",
      "sys_semctl",
      "sys_semop",
      "sys_semtimedop",
    ],
    "Futex": [
      "sys_futex",
      "sys_set_robust_list",
      "sys_get_robust_list",
    ],
    "MessageQueues": [
      "sys_msgget",
      "sys_msgctl",
      "sys_msgsnd",
      "sys_msgrcv",
      "sys_mq_open",
      "sys_mq_unlink",
      "sys_mq_getsetattr",
      "sys_mq_timedsend",
      "sys_mq_timedreceive",
      "sys_mq_notify",
    ],
  },
  "ProcessManagement": {
    "Execution": [
      "sys_clone",
      "sys_fork",
      "sys_vfork",
      "sys_execve",
      "sys_execveat",
      "sys_exit",
      "sys_exit_group",
      "sys_wait4",
      "sys_waitid",
    ],
    "Process": [
      "sys_getpid",
      "sys_getppid",
      "sys_gettid",
    ],
    "Session": [
      "sys_setsid",
      "sys_getsid",
    ],
    "Group": [
      "sys_setpgid",
      "sys_getpgid",
      "sys_getpgrp",
    ],
    "User": [
      "sys_setuid",
      "sys_getuid",
      "sys_setgid",
      "sys_getgid",
      "sys_setresuid",
      "sys_getresuid",
      "sys_setresgid",
      "sys_getresgid",
      "sys_setreuid",
      "sys_setregid",
      "sys_setfsuid",
      "sys_geteuid",
      "sys_getegid",
      "sys_setgroups",
      "sys_getgroups",
    ],
    "Namespace": [
      "sys_setns",
    ],
    "Scheduling": [
      "sys_sched_setattr",
      "sys_sched_getattr",
      "sys_sched_setscheduler",
      "sys_sched_getscheduler",
      "sys_sched_setparam",
      "sys_sched_getparam",
      "sys_sched_setaffinity",
      "sys_sched_getaffinity",
      "sys_sched_get_priority_max",
      "sys_sched_get_priority_min",
      "sys_sched_rr_get_interval",
      "sys_sched_yield",
      "sys_setpriority",
      "sys_getpriority",
      "sys_ioprio_set",
      "sys_ioprio_get",
    ],
    "Resources": [
      "sys_setrlimit",
      "sys_getrlimit",
      "sys_prlimit64",
      "sys_getrusage",
    ],
    "VirtualMemory": [
      "sys_brk",
      "sys_mmap",
      "sys_munmap",
      "sys_mremap",
      "sys_mprotect",
      "sys_madvise",
      "sys_mlock",
      "sys_mlock2",
      "sys_mlockall",
      "sys_mincore",
      "sys_membarrier",
      "sys_modify_ldt",
    ],
    "Threading": [
      "sys_capset",
      "sys_capget",
      "sys_set_thread_area",
      "sys_get_thread_area",
      "sys_set_tid_address",
      "sys_arch_prctl",
    ],
    "MiscellaneousPM": [
      "sys_uselib",
      "sys_prctl",
      "sys_seccomp",
      "sys_ptrace",
      "sys_process_vm_readv",
      "sys_process_vm_writev",
      "sys_kcmp",
      "sys_unshare",
    ]
  }
};

export default mappings;
