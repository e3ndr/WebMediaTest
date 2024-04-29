import vp9_opus__2160p_webm from "./webm/vp9,opus__2160p.webm";
import vp8_opus__720p_webm from "./webm/vp8,opus__720p.webm";

import hevc_aac__2160p_mp4 from "./mp4/hevc,aac__2160p.mp4";
import h264_aac__2160p_mp4 from "./mp4/h264,aac__2160p.mp4";
import h264_aac__1080p_mp4 from "./mp4/h264,aac__1080p.mp4";
import h264_aac__720p_mp4 from "./mp4/h264,aac__720p.mp4";
import h264_aac__360p_mp4 from "./mp4/h264,aac__360p.mp4";

import h264_aac__1080p_mkv from "./matroska/h264,aac__1080p.mkv";

import sorenson_spark_mp3__240p_flv from "./flv/sorenson-spark,mp3__240p.flv";
import vp6_mp3__240p_flv from "./flv/vp6,mp3__240p.flv";
import h264_mp3__240p_flv from "./flv/h264,mp3__240p.flv";
import h264_aac__240p_flv from "./flv/h264,aac__240p.flv";

import sorenson_spark_mp3__240p_swf from "./swf/sorenson-spark,mp3__240p.swf";

export default {
    "category": "video",
    "name": "Russian Dance - Tchaikovsky Nutcracker Suite",
    "credit": "Lud and Schlatt's Musical Emporium",
    "slug": "russian-dance_lud-and-schlatt",
    "files": {
        "webm": [
            {
                "name": "2160p",
                "codecs": [
                    "VP9",
                    "Opus"
                ],
                "file": vp9_opus__2160p_webm,
                "size": "9.82MB",
                "notes": ""
            },
            {
                "name": "720p",
                "codecs": [
                    "VP8",
                    "Opus"
                ],
                "file": vp8_opus__720p_webm,
                "size": "4.88MB",
                "notes": ""
            }
        ],
        "mp4": [
            {
                "name": "2160p",
                "codecs": [
                    "HEVC",
                    "AAC"
                ],
                "file": hevc_aac__2160p_mp4,
                "size": "18.2MB",
                "notes": ""
            },
            {
                "name": "2160p",
                "codecs": [
                    "H264",
                    "AAC"
                ],
                "file": h264_aac__2160p_mp4,
                "size": "16.1MB",
                "notes": ""
            },
            {
                "name": "1080p",
                "codecs": [
                    "H264",
                    "AAC"
                ],
                "file": h264_aac__1080p_mp4,
                "size": "18.1MB",
                "notes": ""
            },
            {
                "name": "720p",
                "codecs": [
                    "H264",
                    "AAC"
                ],
                "file": h264_aac__720p_mp4,
                "size": "18.0MB",
                "notes": ""
            },
            {
                "name": "360p",
                "codecs": [
                    "H264",
                    "AAC"
                ],
                "file": h264_aac__360p_mp4,
                "size": "17.8MB",
                "notes": ""
            }
        ],
        "matroska": [
            {
                "name": "1080p",
                "codecs": [
                    "H264",
                    "AAC"
                ],
                "file": h264_aac__1080p_mkv,
                "size": "18.1MB",
                "notes": "Browsers will actually play MKV files!" //  Since Webm is based on Matroska they have the same headers, and if the browser does a content probe it will think it's a Webm file and start playback.
            }
        ],
        "flv": [
            {
                "name": "240p (Flash 7+)",
                "codecs": [
                    "Sorenson Spark",
                    "MP3"
                ],
                "file": sorenson_spark_mp3__240p_flv,
                "size": "3.03MB",
                "notes": "Should work on the Wii."
            },
            {
                "name": "240p (Flash 8+, broken video)",
                "codecs": [
                    "VP6",
                    "MP3"
                ],
                "file": vp6_mp3__240p_flv,
                "size": "5.94MB",
                "notes": ""
            },
            {
                "name": "240p (Flash 9+)",
                "codecs": [
                    "H264",
                    "MP3"
                ],
                "file": h264_mp3__240p_flv,
                "size": "5.22MB",
                "notes": "Should work on the Wii."
            },
            {
                "name": "240p (Flash 9+)",
                "codecs": [
                    "H264",
                    "AAC"
                ],
                "file": h264_aac__240p_flv,
                "size": "5.23MB",
                "notes": ""
            }
        ],
        "swf": [
            {
                "name": "240p (Flash 6+)",
                "codecs": [
                    "Sorenson Spark",
                    "MP3"
                ],
                "file": sorenson_spark_mp3__240p_swf,
                "size": "3.01MB",
                "notes": "Partially works on the PSP (audio plays, no video). <br /> The Wii plays it but struggles to keep up."
            }
        ]
    }
};