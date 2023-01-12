import {Position} from "./Position";

export enum Role {
    //attacking roles
    DLF = 'DLF',
    AF = 'AF',
    TF = 'TF',
    P = 'P',
    CF = 'CF',
    PF = 'PF',
    FN = 'FN',

    //aml/amr roles
    IF = 'IF',
    WT = 'WT',
    RMD = 'RMD',

    //amcl/amc/amcr roles
    AM = 'AM',
    T = 'T',
    EG = 'EG',
    SS = 'SS',

    //ML/MR roles
    WM = 'WM',
    W = 'W',
    DW = 'DW',
    WP = 'WP',
    IW = 'IW',

    //mcl/mc/mcr roles
    CM = 'CM',
    BBM = 'BBM',
    AP = 'AP',
    MEZ = 'MEZ',
    CAR = 'CAR',

    //dmcl/dmc/dmcr roles
    DM = 'DM',
    DLP = 'DLP',
    BWM = 'BWM',
    A = 'A',
    HB = 'HB',
    RGA = 'RGA',
    RPM = 'RPM',
    VOL = 'VOL',

    //dl/dr roles
    FB = 'FB',
    WB = 'WB',
    NFB = 'NFB',
    CWB = 'CWB',
    IWB = 'IWB',

    //dcl/dc/dcr roles
    CD = 'CD',
    L = 'L',
    BPD = 'BPD',
    NCB = 'NCB',
    WCB = 'WCB',

    //gk roles
    G = 'G',
    SK = 'SK'
}

export const getRolesForPosition = (position: Position) => {

    if (position === null) return [];

    if (position === Position.STC || position === Position.STCL || position === Position.STCR) {
        return getStrikerRoles();
    }
    if (position === Position.AML || position === Position.AMR) {
        return getWideAttackingMidfielderRoles();
    }
    if (position === Position.AMCL || position === Position.AMC || position === Position.AMCR) {
        return getAttackingMidfielderRoles();
    }
    if (position === Position.ML || position === Position.MR) {
        return getWideMidfielderRoles();
    }
    if (position === Position.MCL || position === Position.MC || position === Position.MCR) {
        return getMidfielderRoles();
    }
    if (position === Position.WBL || position === Position.WBR) {
        return getAttackingWingBackRoles();
    }
    if (position === Position.DMCL || position === Position.DMC || position === Position.DMCR) {
        return getDefensiveMidfielderRoles();
    }
    if (position === Position.DL || position === Position.DR) {
        return getWingBackRoles();
    }
    if (position === Position.DCL || position === Position.DC || position === Position.DCR) {
        return getDefenderRoles();
    }
    return getGoalkeeperRoles();
}

export const getStrikerRoles = () => {
    return [
        Role.DLF,
        Role.AF,
        Role.TF,
        Role.P,
        Role.CF,
        Role.PF,
        Role.T,
        Role.FN
    ]
}
export const getWideAttackingMidfielderRoles = () => {
    return [
        Role.W,
        Role.AP,
        Role.IF,
        Role.T,
        Role.WT,
        Role.RMD,
        Role.IW
    ]
}
export const getAttackingMidfielderRoles = () => {
    return [
        Role.AM,
        Role.AP,
        Role.T,
        Role.EG,
        Role.SS
    ]
}
export const getWideMidfielderRoles = () => {
    return [
        Role.WM,
        Role.W,
        Role.DW,
        Role.WP,
        Role.IW,
    ]
}
export const getMidfielderRoles = () => {
    return [
        Role.CM,
        Role.DLP,
        Role.BBM,
        Role.AP,
        Role.BWM,
        Role.RPM,
        Role.MEZ,
        Role.CAR
    ]
}
export const getAttackingWingBackRoles = () => {
    return [
        Role.WB,
        Role.CWB,
        Role.IWB
    ]
}
export const getDefensiveMidfielderRoles = () => {
    return [
        Role.DM,
        Role.DLP,
        Role.BWM,
        Role.A,
        Role.HB,
        Role.RGA,
        Role.RPM,
        Role.VOL
    ]
}
export const getWingBackRoles = () => {
    return [
        Role.FB,
        Role.WB,
        Role.NFB,
        Role.CWB,
        Role.IWB
    ]
}
export const getDefenderRoles = () => {
    return [
        Role.CD,
        Role.L,
        Role.BPD,
        Role.NCB,
        Role.WCB
    ]
}
export const getGoalkeeperRoles = () => {
    return [
        Role.G,
        Role.SK
    ]
}