export const CONTAINER_FORMATS = [
    {
        mime: "mp4",
        name: "MP4",
        slug: 'media.mp4'
    },
    {
        mime: "webm",
        name: "WebM",
        slug: 'media.webm'
    },
    {
        mime: "ogg",
        name: "OGG",
        slug: 'media.ogg'
    },
    {
        mime: "mkv",
        name: 'Matroska<a href="#footnote2">&#8224;&#8224;</a>',
        slug: 'media.mkv'
    },
    {
        mime: "3gpp",
        name: "3GP",
        slug: 'media.3gp'
    },
    {
        mime: "quicktime",
        name: "QuickTime (.mov)",
        slug: 'media.mov'
    },
    {
        mime: "x-msvideo",
        name: "AVI",
        slug: 'media.avi'
    },
    {
        mime: "mp2t",
        name: "MPEG-TS",
        slug: 'media.ts'
    }];

export const VIDEO_CODECS = [
    {
        subType: false,
        mime: 'mpeg2',
        name: 'MPEG 2 / H.262',
        slug: 'mpeg2',
        containers: ["mp4", "mkv", "quicktime", "x-msvideo", "mp2t"],
        testFile: 'media.ts'
    },
    {
        subType: false,
        mime: 'spark',
        name: 'Sorenson Spark / H.263',
        slug: null,
        containers: [],
        testFile: null
    },
    {
        subType: false,
        mime: 's263',
        name: 'ITU H.263',
        slug: null,
        containers: [],
        testFile: null
    },
    {
        subType: false,
        mime: 'avc1',
        name: 'AVC1 / H.264',
        slug: "avc1",
        containers: [],
        testFile: null
    },
    {
        subType: true,
        mime: 'avc1.42000a',
        name: '&#8627; Baseline, 1.0',
        slug: 'avc1',
        containers: ["mp4", "mkv", "3gpp", "quicktime", "x-msvideo", "mp2t"],
        testFile: "media.mp4"
    },
    {
        subType: false,
        mime: 'hev1',
        name: 'HEVC / H.265',
        slug: null,
        containers: [],
        testFile: null
    },
    {
        subType: true,
        mime: 'hev1.1.6.L93.B0',
        name: '&#8627; Main, 3.1',
        slug: 'hevc',
        containers: ["mp4", "mkv", "quicktime", "x-msvideo", "mp2t"],
        testFile: "media.mp4"
    },
    {
        subType: false,
        mime: 'vvc',
        name: 'VVC / H.266',
        slug: 'vvc',
        containers: [],
        testFile: null // Don't think I can find an encoder for this...
    },
    {
        subType: false,
        mime: 'vp3',
        name: 'On2 TrueMotion VP3',
        slug: 'vp3',
        containers: [],
        testFile: null // Don't think I can find an encoder for this...
    },
    {
        subType: false,
        mime: 'vp6',
        name: 'On2 TrueMotion VP6',
        slug: 'vp6',
        containers: [],
        testFile: null
    },
    {
        subType: false,
        mime: 'vp8',
        name: 'VP8',
        slug: 'vp8',
        containers: ["webm", "mkv", "x-msvideo"],
        testFile: "media.webm"
    },
    {
        subType: false,
        mime: 'vp9',
        name: 'VP9',
        slug: 'vp9',
        containers: ["mp4", "webm", "mkv", "x-msvideo"],
        testFile: "media.webm"
    },
    {
        subType: false,
        mime: 'vp10',
        name: 'VP10<a href="#footnote3">&#8224;&#8224;&#8224;</a>',
        slug: null,
        containers: [],
        testFile: null // Don't think I can find an encoder for this...
    },
    {
        subType: false,
        mime: 'av01',
        name: 'AV1',
        slug: null,
        containers: [],
        testFile: null
    },
    {
        subType: true,
        mime: 'av01.0.00M.08',
        name: '&#8627; Main, 2.0',
        slug: 'av1',
        containers: ["mp4", "webm", "mkv", "x-msvideo"],
        testFile: "media.webm"
    },
    {
        subType: false,
        mime: 'daala',
        name: 'Daala',
        slug: null,
        containers: [],
        testFile: null // Don't think I can find an encoder for this...
    },
    {
        subType: false,
        mime: 'thor',
        name: 'Thor',
        slug: null,
        containers: [],
        testFile: null
    },
    {
        subType: false,
        mime: 'theora',
        name: 'Theora',
        slug: 'theora',
        containers: ["ogg", "mkv", "quicktime", "x-msvideo"],
        testFile: "media.ogg"
    },
    {
        subType: false,
        mime: 'svq1',
        name: 'Sorenson Video',
        slug: null,
        containers: [],
        testFile: null
    },
    {
        subType: false,
        mime: 'mjpeg',
        name: 'Motion-JPEG',
        slug: 'mjpeg',
        containers: ["mp4", "mkv", "quicktime", "x-msvideo"],
        testFile: "media.avi"
    }
];

export const AUDIO_CODECS = [
    {
        subType: false,
        mime: 'mp4a.40.2',
        name: 'AAC',
        slug: 'aac',
        containers: [],
        testFile: null
    },
    {
        subType: false,
        mime: 'mp3',
        name: 'MP3',
        slug: 'mp3',
        containers: [],
        testFile: null
    },
    {
        subType: false,
        mime: 'alac',
        name: 'Apple Lossless',
        slug: null,
        containers: [],
        testFile: null
    },
    {
        subType: false,
        mime: 'flac',
        name: 'FLAC',
        slug: 'flac',
        containers: [],
        testFile: null
    },
    {
        subType: false,
        mime: 'opus',
        name: 'Opus',
        slug: 'opus',
        containers: [],
        testFile: null
    },
    {
        subType: false,
        mime: 'vorbis',
        name: 'Vorbis',
        slug: null,
        containers: [],
        testFile: null
    },
    {
        subType: false,
        mime: 'g711',
        name: 'G.711<a href="#footnote1">&#8224;</a>',
        slug: null,
        containers: [],
        testFile: null
    },
    {
        subType: true,
        mime: 'ulaw',
        name: '&#8627; μ-law<a href="#footnote1">&#8224;</a>',
        slug: null,
        containers: [],
        testFile: null
    },
    {
        subType: true,
        mime: 'alaw',
        name: '&#8627; A-law<a href="#footnote1">&#8224;</a>',
        slug: null,
        containers: [],
        testFile: null
    },
    {
        subType: false,
        mime: 'g722',
        name: 'G.722<a href="#footnote1">&#8224;</a>',
        slug: null,
        containers: [],
        testFile: null
    },
    {
        subType: false,
        mime: 'amr',
        name: 'Adaptive-Multi-Rate',
        slug: null,
        containers: [],
        testFile: null
    },
    {
        subType: true,
        mime: 'samr',
        name: '&#8627; Narrowband',
        slug: null,
        containers: [],
        testFile: null
    },
    {
        subType: true,
        mime: 'sawb',
        name: '&#8627; Wideband',
        slug: null,
        containers: [],
        testFile: null
    },
    {
        subType: true,
        mime: 'sawp',
        name: '&#8627; Wideband+',
        slug: null,
        containers: [],
        testFile: null
    },
    {
        subType: false,
        mime: 'x-speex',
        name: 'Speex',
        slug: null,
        containers: [],
        testFile: null
    }
];

export const SPECIAL_FORMATS = {
    'audio/mp4': 'MPEG-4 Part 3 (.m4a)',
    'audio/flac': 'FLAC',
    'audio/mpeg': 'MP3',
    'audio/wav': 'Wave (.wav)',
    'application/x-mpegURL': 'Apple HLS'
};
