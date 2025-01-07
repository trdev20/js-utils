import nodePath from "node:path";
import fs from "node:fs";

/**
 * Checks if two paths are equal
 */

export const pathsAreEqual = (path1: string, path2: string): boolean =>
  nodePath.relative(path1, path2) === "";

/**
 * Checks if a path is a directory
 */

export const isDirectory = (path: string): boolean =>
  fs.existsSync(path) && fs.statSync(path).isDirectory();

/**
 * Checks if a path is a file
 */

export const isFile = (path: string): boolean => fs.existsSync(path) && fs.statSync(path).isFile();
