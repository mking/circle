enum StatusType {
    SUCCESS,
    FIXED,
    CANCELLED,
    FAILED,
    TIMED_OUT
}

module StatusType {
    export function toBadgeStatus(status: StatusType) {
        const badgeStatuses: any = {
            [StatusType.SUCCESS]: StatusType.SUCCESS,
            [StatusType.FIXED]: StatusType.SUCCESS,
            [StatusType.CANCELLED]: StatusType.CANCELLED,
            [StatusType.FAILED]: StatusType.FAILED,
            [StatusType.TIMED_OUT]: StatusType.FAILED,
        };
        return badgeStatuses[status];
    }
}

export default StatusType
