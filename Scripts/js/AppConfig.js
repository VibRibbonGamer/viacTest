document.appConfig = {
    appName: 'Media Services',
    apiKey: '',
    defaultNamespace: 'Viacom.MediaServices.Models.CodeFirst',
    approverParentCollectionId: 5555,
    physicalWorkflowLibraryTypeId: 2,
    onboardingDomains: ['CORP', 'DMZ', 'MTVN', 'PARAMOUNT', 'VIACOM_CORP'],
    inStatusTypeId: 1,
    WONSearchUrl: 'http://mspdowopappqa01:58903/integrations/programs/search?searchParameters=contains(titleSelection%2C',
    digitalPriorityValue: {
        Rush: 'Rush',
        SuperRush: 'SuperRush',
        ExpressRush: 'ExpressRush'
    },
    minimumResultsForSearch: 5,
    dateFormat: 'MM/DD/YYYY',
    longDateFormat: 'MM/DD/YYYY h:mm:ss a',
    userAccountActivationLink: 'Onboarding/AccountActivation/',
    viewSharedVideoUrl: 'Watch/',
    numberOfPagesPerPagerSet: 4,
    renditionIdToDisplayLanguages: 103,
    uploadDirectory: '~//Uploads//Attachments',
    externalSites: {
        onboarding: 'https://onboarding.viacom.com/',
        relay: 'https://relay.viacom.com/',
        vkfScreeners: 'https://vkfscreeners.viacom.com/',
        mtvScreeners: 'https://mtvscreeners.viacom.com',
        cmtScreeners: 'https://cmtscreeners.viacom.com',
        nickScreeners: 'https://nickscreeners.viacom.com',
        cmtScreeners: 'https://cmtscreeners.viacom.com/',
        onboardingRegistrations: 'https://vmnprod.service-now.com/viaess/catalog.do?v=1&uri=com.glideapp.servicecatalog_cat_item_view.do?v%3D1%26sysparm_id%3D583e951585df4600dca2777989c49212%26sysparm_link_parent%3D7270e02e0d3e51401ad0e1208a9181bd%26sysparm_catalog%3De0d08b13c3330100c8b837659bba8fb4&sysparm_document_key=sc_cat_item%2c583e951585df4600dca2777989c49212',
        aliasWebClassic: 'http://aliasweb.viacom.com',
        vaultAnalytics: 'https://vaultanalytics.viacom.com',
        BulkIngest: 'https://mediaservices.viacom.com/BulkIngest/'
    },
    windowLocation: window.location.href.toLocaleLowerCase(),
    messages: {
        required: 'Some required information is missing or incomplete. Please correct your entries and try again.',
        invalidCostCenter: 'Cost center does not exist. Please make a valid entry.',
        fatalUser: 'No permissions found for user with email {0}. Please verify that this email is correct and that there is an active ALIAS user account with this email.',
        contentViewRedirect: '<h4>Taking You to Content View</h4> <p>Up, up, and awwwaaaayyy.</p>',
        genericError: 'There was some error processing your request. Please try again after some time.',
        noResults: 'No results found, content may be restricted or does not exist',
        noRecords: 'No records found.',
        noItems: 'No items present',
        noInvitations: 'No Invitations sent.',
        dateRange: 'Invalid Date range',
        dateRangeRestriction: 'Date range should not be greater than 30 days.',
        invalidVideo: 'The video could not be loaded, either because the server or network failed or because the format is not supported.',
        confirmPageNavigation: 'You have unsaved changes. If you leave you will lose these changes.',
        invalidContent: 'You cannot be redirected to Content View for an invalid Item.',
        noRendition: 'Please add atleast one rendition to submit the request.',
        shareLink: 'Share time cannot be greater than 168 hours/7 days!',
        emailToField: 'Please enter valid To field.',
        unsaved: 'Any unsaved changes will be lost. Do you still want to continue?',
        audioLayoutPreferenceMsg: 'Are you sure you want to change this ? ',
        audioLayoutNewPreferenceSave: 'On save this will activate new logic of Audio Layout Matching which will display Matched Audio Layout before submitting the WO.<br/><br/> *Remember to save the changes before to reflect the changes.',
        audioLayoutOldPreferenceSave: 'On save this will activate current logic of Audio Layout Matching.<br/><br/> *Remember to save the changes before to reflect the changes.',
        blankEmail: 'Logged in user doesnt have the email associated with account.',
        inactiveUser: 'Either user is not active or user type is not proper one.',
        preferencesSave: 'Are you sure you want to save?',
        wonPreferenceMsg: 'Are you sure you want to change this ? ',
        wonPrefercesSave: 'On save this will activate WON Integration across VMS and deactivate PTS integration.<br/><br/> *Remember to save the changes before to reflect the changes.',
        ptsPreferencesSave: 'On save this will activate PTS Integration across VMS and deactivate WON integration.<br/><br/> *Remember to save the changes before to reflect the changes.',
        ptsSegmentMessage: 'Get Segment data from PTS',
        wonSegmentMessage: 'Get Segment data from Won',
        searchByPts: 'Search By PTS Series',
        searchByWon: 'Search By Won Series',
        catapultCapabilityFail: 'Audio Program Failed to match Catapult Capabiilty for selected Destination Media Format',
        validEmail: 'Please enter the email recipient(s) in a valid format: <b>abc@xyz.com</b>'
    },
    dialogTitles: {
        remove: 'Confirm Delete',
        confirm: 'Confirm'
    },
    cssClasses: {
        success: 'btn btn-alt btn-success',
        error: 'btn btn-alt btn-danger',
        warning: 'btn btn-alt btn-danger'
    },
    resultsPerPage: {
        text: 'Results Per Page',
        size: [25, 50, 75, 100, 150, 200]
    },
    messageCodes: {
        success: 0,
        warning: 1,
        error: -1
    },
    itemTypes: {
        clip: 'Clip',
        segment: 'Segment',
        material: 'Material',
        content: 'Content',
        image: 'Image',
        asset: 'Asset',
        stitch: 'Stitch',
        logging: 'Logging',
        multiSegment: 'Multi-Segment',
        multiSegmentIcs: 'Multi-Segment ICS'
    },
    invitationStatus: {
        pending: 'Pending',
        cancelled: 'Canceled',
        accepted: 'Accepted',
        expired: 'Expired'
    },
    userGroups: {
        invitation: "Invitation",
        invitationAdmin: "Invitation Admin",
        webDasboardAdmin: "Web Dashboard Admin",
        dmiIngest: "DMI Ingest",
        bulkIngest: "Bulk Ingest",
        bulkUpdate: "Bulk Update",
        clipping: "Clipping",
        clippingBeta: "ClippingBeta",
        webDasboard: "Web Dashboard",
        WebContentView: "Web Content View",
        WebTreeSearch: "Web Tree Search",
        WebWorkOrderView: "Web WorkOrder View",
        WebOnBoarding: "Onboarding",
        WebCart: "Cart",
        webSearchContent: "Web Search content",
        webCollections: "Web Collections",
        complexAssets: "Complex Asset Ingest",
        ptsClips: "PTS Clips",
        quickClick: "Quick Click",
        libraryServicesAdmin: "Library Services Admin",
        vaultAnalytics: ["VaultAdminGroup", "VaultExecutiveGroup"],
        edlImport: "EDL Import",
        adminSecurity: 'Web Administration - Security',
        adminTemplates: 'Web Administration - Templates',
        adminMaintenance: 'Web Administration - Maintenance',
        submissionsCanIngest: 'Submissions - Can Ingest',
        editContentView: 'Web - Edit Content View',
        adminSegments: 'Enable to segment on web',
        adminAudioLayout: 'Audio Layout Matching',
        adminWON: 'AdminWONGroup',
        workOrderRequestTracing: 'WorkOrderRequestTracingGroup',
        internalUser: 'Internal User',
        overwriteSegments: 'Allowed to overwrite segments - Segment Cloner',
        canViewInactiveAssetsAdmin: 'Web - View Inactive Assets',
        canToggleIngestPreValidation: 'Ingest pre-validation for files and folders',
        canDisableMaterialInActivationRule: 'Disable Material Inactivation Rules',
        canAccessExpressRushPriority: 'Access to express rush priority',
    },
    screens: {
        search: 'search',
        collection: 'collections',
        cart: 'cart',
        contentViewOld: 'content view old',
        woDashboard: 'work order dashboard',
        onboardingHome: 'onboarding home',
        invitation: 'invitation',
        manageInvitation: 'manage invitation',
        manageAllInvitations: 'manage all invitations',
        manageSelfRegistrations: 'manage self registrations',
        ingest: 'ingest',
        bulkIngest: 'bulkIngest',
        home: 'home',
        logger: 'logger',
        mxMapping: 'mx mapping',
        bulkUpdate: 'bulk update',
        preferences: 'my preferences',
        workOrderView: 'work order view',
        contentView: 'content view',
        treeSearch: 'tree search',
        admin: 'administration',
        submissions: 'submissions'
    },
    appSettings: {
        ptsRestServiceToken: 'PTSRestServiceAuthToken',
        ptsRestServiceURL: 'PTSRestServiceUrl',
        viacomDomains: 'ViacomDomains',
        helpMeEmail: 'request.mscs@paramount.tech',
        helpMeInvalidEmail: 'externaluser@viacom.com',
        helpMeInvalidUser: 'externaluser',
        vmsSolrSearchRestriction: 'VMSSolrSearchRestriction',
        vmsTaggingServiceEnabled: 'VMSTaggingServiceEnabled',
        loggerClipsDurationThreshold: 'VMSLoggerClipDurationThreshold',
        vmsCloudIngestEnabled: 'VMSCloudIngestEnabled',
    },
    logMessage: {
        share: 'Sharing a video',
        download: 'Downloading a video',
        previewed: 'Video/Audio has been previewed',
        captionsPreviewed: "Captions has been Previewed",
        audioDownload: "Downloading an Audio",
        documentDownloads: {
            script: 'Script has been downloaded',
            castAndGuestStarCreditList: "Cast and  Guest Star Credit List has been downloaded",
            formattedEndCreditList: "Formatted End Credit List has been downloaded",
            timecodedAsBroadcastScript: "Timecoded As-Broadcast Script has been downloaded",
            graphicCueRundown: "Graphic Cue Rundown has been downloaded",
            rundownsSubmissionForms: "Rundowns/submission forms has been downloaded"
        }
    },
    systemOfOriginIds: {
        mva: 'A',
        pts_clip: 'C',
        sims: 'M',
        oap: 'O',
        pts: 'P',
        pts_extended: 'Q',
        pts_unlinked: 'R',
        alias: 'S',
        none: 'X',
        ibms: 'E',
        nas: 'B',
        won: 'W',
        won_clip: 'Y'
    },
    renditionTypes: {
        simple: 'S',
        complex: 'C'
    },
    loggerRenditions: {
        editedMaster: 7,
        archiveMaster: 100,
        submissionMaster: 102,
        splitTrackMaster: 1707,
        bumper: 1764,
        textlessElements: 1774,
        dubbingCard: 1825
    },
    aliasRenditions: {
        archiveMaster: 100,
        submissionMaster: 102,
        captionFile: 103,
        proxyCaptionQC: 1714,
        subtitleFile: 1717,
        complexAsset: 1726,
        audioStem: 1746,
        document: 1730,
        docProxy: 1729,
        editedmaster: 7,
        audioProxy: 1728,
        audioStemProxy: 1747,
        imageProxy: 1727,
        programProxy: 1723,
        proxy: 104,
        wavProxy: 1335,
        audioMaster: 252,
        subtitleMaster: 3680,
        sccMaster: 1215,
        webCaption: 1750,
        bumper: 1764,
        script: 1215,
        castAndGuestStarCreditList: 1757,
        formattedEndCreditList: 1753,
        timecodedAsBroadcastScript: 1754,
        graphicCueRundown: 1755,
        rundownsSubmissionForms: 1756
    },
    aliasRenditionTypeId: {
    },
    allAliasRenditionId: {
    },
    contentTypes: {
        finished: 1,
        footage: 2,
        musicVideoCompReel: 3,
        promoReel: 4,
        audio: 5,
        box: 6,
        musicVideo: 7,
        brick: 8,
        graphic: 9,
        commercial: 10,
        workReel: 11,
        promo: 48,
        news: 87,
        digitalStorage: 168
    },
    contentDates: {
        text: 'Date Type',
        dates: ["None", "Record Date", "Entered Date", "Premiere Date"]
    },
    taskType: {
        workflowParent: 31,
        requiresApproval: 58
    },
    attachments: {
        libraryId: 5450,
        directory: 'WebIngestAttachments',
        tempUploadDirectory: 'TempAttachments',
        attachmentsFileExtentions: ['txt', 'rtf', 'doc', 'docx', 'xls', 'xlsx', 'csv', 'pdf', 'xml'],
    },
    wonProgramTypes: {
        series: 'Series',
        modularEpisodeSeries: 'Modular episodic series',
        episode: 'Episode',
        special: 'Special',
        program: 'Program',
        movie: 'Movie',
        clip: 'Clip',
        bonusContent: 'Bonus Content',
        deletedScenes: 'Deleted Scenes',
        excerpt: 'Excerpt',
        musicPerformance: 'Music Performance'

    },
    languages: {
        universalAudioNoLiguisticContent: 544,
    },
    VMSEnvUrls: {
        'https://aliasextsvcdev.viacom.com/alias/dev1': {
            tagWidgetEnv: 'vmsDev'
        },
        'https://aliasextsvcdev.viacom.com/alias/dev2': {
            tagWidgetEnv: 'vmsDev2'
        },
        'https://aliasextsvcdev.viacom.com/alias/neptune': {
            tagWidgetEnv: 'vmsNeptune'
        },
        'https://aliasextsvcdev.viacom.com/alias/mercury': {
            tagWidgetEnv: 'vmsMercury'
        },
        'https://aliasextsvcqa.viacom.com/alias/qa': {
            tagWidgetEnv: 'vmsQa'
        },
        'https://aliasextsvcqa.viacom.com/alias/venus': {
            tagWidgetEnv: 'vmsVenus'
        },
        'https://aliasextsvcqa.viacom.com/alias/saturn': {
            tagWidgetEnv: 'vmsSaturn'
        },
        'https://aliasextsvcstg.viacom.com': {
            tagWidgetEnv: 'vmsStaging'
        },
        'https://aliasextsvc.viacom.com': {
            tagWidgetEnv: 'vmsProd'
        }
    },
    DiagnosticsDevice: {
        baton: 2,
        mediaMate: 4
    },
    logger: {
        clipsDurationThreshold: 4
    },
    storages: {
        noncloud: "On Premise",
        cloud: "Cloud",
    },
    searchResults: {
        recentSearchLimit: 5
    },
    taskStatusColorIconConfig: [
        { statusMessage: 'Completed', iconClass: 'fa fa-check', colorCode: '#27AE60' },
        { statusMessage: 'Killed / Failed', iconClass: 'fa fa-times', colorCode: '#E74C3C' },
        { statusMessage: 'Dispatched', iconClass: 'fa fa-truck', colorCode: '#934E0D' },
        { statusMessage: 'Assigned', iconClass: 'fa fa-arrow-right', colorCode: '#B38355' },
        { statusMessage: 'Pending / Awaiting Approval', iconClass: 'fa fa-clock-o', colorCode: '#E67E22' },
        { statusMessage: 'In Progress', iconClass: 'fa fa-circle-o-notch fa-spin', colorCode: '#2980B9' },
        { statusMessage: 'Resubmitting', iconClass: 'fa fa-cog fa-spin', colorCode: '#E67E22' },
        { statusMessage: 'Queued / Queued at Catapult', iconClass: 'fa fa-tasks', colorCode: '#673AB7' },
        { statusMessage: 'Sent to Catapult', iconClass: 'glyphicon glyphicon-send', colorCode: '#0000e6' },
        { statusMessage: 'Initialized at Catapult', iconClass: 'glyphicon glyphicon-transfer', colorCode: '#0000e6' },
        { statusMessage: 'Killing', iconClass: 'fa fa-scissors', colorCode: '#E67E22' },
    ],
    watchPage: {
        imageFileExtensions: 'bmp,dgn,jpg,png,tga,tif,tiff'
    },
    svcs: {
        CentralRepoMAMSvc: 84452,
        CentralRepoMAMSvc_Dev: 84451
    }
}
