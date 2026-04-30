const LoadingPage = () => {
    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-3">
                <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
                    <div className="mb-5 flex items-center justify-between">
                        <div className="skeleton h-6 w-28"></div>
                        <span className="loading loading-dots loading-sm text-primary"></span>
                    </div>
                    <div className="space-y-3">
                        {Array.from({ length: 8 }).map((_, index) => (
                            <div
                                key={index}
                                className="skeleton h-12 w-full rounded-xl"
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="col-span-6">
                <div className="mb-5 flex items-center justify-between">
                    <div>
                        <div className="skeleton mb-3 h-6 w-44"></div>
                        <div className="skeleton h-4 w-64"></div>
                    </div>
                    <span className="loading loading-spinner loading-md text-error"></span>
                </div>

                <div className="space-y-8">
                    {Array.from({ length: 2 }).map((_, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-sm"
                        >
                            <div className="flex items-center justify-between bg-base-200 px-5 py-4">
                                <div className="flex items-center gap-4">
                                    <div className="skeleton h-12 w-12 rounded-full"></div>
                                    <div className="space-y-2">
                                        <div className="skeleton h-4 w-28"></div>
                                        <div className="skeleton h-3 w-40"></div>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <div className="skeleton h-8 w-8 rounded-full"></div>
                                    <div className="skeleton h-8 w-8 rounded-full"></div>
                                </div>
                            </div>

                            <div className="space-y-5 p-5">
                                <div className="skeleton h-7 w-full"></div>
                                <div className="skeleton h-7 w-4/5"></div>
                                <div className="skeleton h-56 w-full rounded-xl"></div>
                                <div className="space-y-3">
                                    <div className="skeleton h-4 w-full"></div>
                                    <div className="skeleton h-4 w-full"></div>
                                    <div className="skeleton h-4 w-3/4"></div>
                                </div>
                                <div className="flex items-center justify-between border-t border-base-300 pt-5">
                                    <div className="flex items-center gap-3">
                                        <div className="skeleton h-4 w-24"></div>
                                        <div className="skeleton h-4 w-10"></div>
                                    </div>
                                    <div className="skeleton h-4 w-16"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="col-span-3">
                <div className="space-y-6">
                    <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
                        <div className="skeleton mb-5 h-6 w-28"></div>
                        <div className="space-y-3">
                            <div className="skeleton h-12 w-full rounded-xl"></div>
                            <div className="skeleton h-12 w-full rounded-xl"></div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm">
                        <div className="skeleton mb-5 h-6 w-24"></div>
                        <div className="space-y-3">
                            <div className="skeleton h-14 w-full rounded-xl"></div>
                            <div className="skeleton h-14 w-full rounded-xl"></div>
                            <div className="skeleton h-14 w-full rounded-xl"></div>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-base-200 p-4 shadow-sm">
                        <div className="skeleton mb-4 h-6 w-20"></div>
                        <div className="space-y-4">
                            <div className="skeleton h-28 w-full rounded-xl"></div>
                            <div className="skeleton h-28 w-full rounded-xl"></div>
                            <div className="skeleton h-28 w-full rounded-xl"></div>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-neutral p-5 text-neutral-content shadow-sm">
                        <div className="mb-4 flex items-center gap-3">
                            <span className="loading loading-ring loading-md"></span>
                            <div>
                                <div className="font-semibold">Preparing Latest News</div>
                                <div className="text-sm opacity-80">Loading homepage blocks...</div>
                            </div>
                        </div>
                        <progress className="progress progress-error w-full" value="65" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;
