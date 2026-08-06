import KeywordTracking from "../models/keywordTracking.js";
import { keywordTracking } from "../services/keywordTrackingService.js";

// Add a keyword to track
export const addKeyword = async (req, res) => {
    try {
        const { keyword, url } = req.body;

        if (!keyword || !url) {
            return res.status(400).json({
                success: false,
                message: "Keyword and URL are required",
            });
        }

        // Extract domain from URL
        let domain;

        try {
            const urlObj = new URL(
                url.startsWith("http") ? url : `https://${url}`
            );

            domain = urlObj.hostname.replace("www.", "");
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: "Invalid URL",
            });
        }

        // Check if keyword is already tracked
        const existing = await KeywordTracking.findOne({
            userId: req.userId,
            keyword: keyword.toLowerCase().trim(),
            domain,
        });

        if (existing) {
            return res.status(400).json({
                success: false,
                message: "Keyword is already being tracked for this domain",
            });
        }

        // Create tracking entry
        const tracking = await KeywordTracking.create({
            userId: req.userId,
            keyword: keyword.toLowerCase().trim(),
            url: url.startsWith("http") ? url : `https://${url}`,
            domain,
            status: "checking",
        });

        res.status(201).json({
            success: true,
            message: "Keyword tracking started",
            tracking,
        });

        keywordTracking(tracking);
    } catch (error) {
        console.error("Error adding keyword:", error.message);

        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: "Keyword is already being tracked for this domain",
            });
        }

        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

// Get all tracked keywords for user
export const getKeywords = async (req, res) => {
    try {
        const keywords = await KeywordTracking.find({
            userId: req.userId,
        })
            .sort({ createdAt: -1 })
            .select("-rankHistory");

        res.json({
            success: true,
            keywords,
        });
    } catch (error) {
        console.error("Get keywords error:", error.message);

        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

// Get single keyword
export const getKeyword = async (req, res) => {
    try {
        const tracking = await KeywordTracking.findOne({
            _id: req.params.id,
            userId: req.userId,
        });

        if (!tracking) {
            return res.status(404).json({
                success: false,
                message: "Keyword tracking not found",
            });
        }

        res.json({
            success: true,
            tracking,
        });
    } catch (error) {
        console.error("Get keyword error:", error.message);

        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

// Manually refresh keyword rank
export const refreshKeyword = async (req, res) => {
    try {
        const tracking = await KeywordTracking.findOne({
            _id: req.params.id,
            userId: req.userId,
        });

        if (!tracking) {
            return res.status(404).json({
                success: false,
                message: "Keyword tracking not found",
            });
        }

        tracking.status = "checking";
        await tracking.save();

        res.json({
            success: true,
            tracking,
        });

        keywordTracking(tracking);
    } catch (error) {
        console.error("Refresh keyword error:", error.message);

        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

// Delete keyword
export const deleteKeyword = async (req, res) => {
    try {
        const tracking = await KeywordTracking.findOneAndDelete({
            _id: req.params.id,
            userId: req.userId,
        });

        if (!tracking) {
            return res.status(404).json({
                success: false,
                message: "Keyword tracking not found",
            });
        }

        res.json({
            success: true,
            message: "Keyword tracking deleted successfully",
        });
    } catch (error) {
        console.error("Delete keyword error:", error.message);

        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

// Toggle tracking
export const toggleTracking = async (req, res) => {
    try {
        const tracking = await KeywordTracking.findOne({
            _id: req.params.id,
            userId: req.userId,
        });

        if (!tracking) {
            return res.status(404).json({
                success: false,
                message: "Keyword tracking not found",
            });
        }

        tracking.active = !tracking.active;
        await tracking.save();

        res.json({
            success: true,
            tracking,
        });
    } catch (error) {
        console.error("Toggle tracking error:", error.message);

        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};