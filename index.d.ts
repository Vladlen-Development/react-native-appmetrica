 type AppMetricaConfig = {
    apiKey: string,
    appVersion?: string,
    crashReporting?: boolean,
    firstActivationAsUpdate?: boolean,
    location?: Location,
    locationTracking?: boolean,
    logs?: boolean,
    sessionTimeout?: number,
    statisticsSending?: boolean,
    preloadInfo?: PreloadInfo,
    // Only Android
    installedAppCollecting?: boolean,
    maxReportsInDatabaseCount?: number,
    nativeCrashReporting?: boolean,
    // Only iOS
    activationAsSessionStart?: boolean,
    sessionsAutoTracking?: boolean,
}

type PreloadInfo = {
    trackingId: string,
    additionalInfo?: Object,
}

type Location = {
    latitude: number,
    longitude: number,
    altitude?: number,
    accuracy?: number,
    course?: number,
    speed?: number,
    timestamp?: number
}

type AppMetricaDeviceIdReason = 'UNKNOWN' | 'NETWORK' | 'INVALID_RESPONSE';

export default interface ReactNativeAppmetrica {
    activate: (config: AppMetricaConfig) => Promise<void>;
    reportEvent: (eventName: string, attributes?: null | Object) => Promise<void>;
    getLibraryApiLevel: () => Promise<void>;
    getLibraryVersion: () => Promise<void>;
    pauseSession: () => void;
    reportAppOpen: (deeplink: string) => void;
    reportError: (error: string, reason: Object) => void;
    reportReferralUrl: (referralUrl: string) => void;
    requestAppMetricaDeviceID: (listener: (deviceId?: string, reason?: AppMetricaDeviceIdReason) => void) => void;
    resumeSession: () => void;
    sendEventsBuffer: () => void;
    setLocation: (location: Location) => void;
    setLocationTracking: (enabled: boolean) => void;
    setStatisticsSending: (enabled: boolean) => void;
    setUserProfileID: (userProfileID: string) => void;
}
