import * as React from "react";

const Logo: React.FC = () => {
  return (
    <svg
      width={76}
      height={76}
      viewBox="0 0 76 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill="url(#prefix__pattern0)" d="M0 0h76v76H0z" />
      <defs>
        <pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#prefix__image0" transform="scale(.00333)" />
        </pattern>
        <image
          id="prefix__image0"
          width={300}
          height={300}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAACXBIWXMAAC4jAAAuIwF4pT92AAAKXmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTExLTAyVDE0OjIwOjU2KzA5OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTExLTAyVDE2OjAzOjA3KzA5OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0xMS0wMlQxNjowMzowNyswOTowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YTM5MWE1NTgtYTU3Ny1hMzQwLWI2YjUtZWEyYWY5NzFlMzkzIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZjQ0YjdmOGItYzZkNy0zOTRmLWI0M2QtOGFjZTQ3OTEwZmU5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NGUxMGI2NjEtNDU5NS1kZDRlLWI5YjAtODMwMmZmZmRiMDY4IiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHRpZmY6T3JpZW50YXRpb249IjEiIHRpZmY6WFJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6WVJlc29sdXRpb249IjMwMDAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iMSIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMwMCIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMwMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGUxMGI2NjEtNDU5NS1kZDRlLWI5YjAtODMwMmZmZmRiMDY4IiBzdEV2dDp3aGVuPSIyMDIwLTExLTAyVDE0OjIwOjU2KzA5OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJmMWQ0YTdjLTg1Y2QtZGQ0YS04NTk4LWEyNTA5NjUwMGM0YyIgc3RFdnQ6d2hlbj0iMjAyMC0xMS0wMlQxNjowMzowNyswOTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphMzkxYTU1OC1hNTc3LWEzNDAtYjZiNS1lYTJhZjk3MWUzOTMiIHN0RXZ0OndoZW49IjIwMjAtMTEtMDJUMTY6MDM6MDcrMDk6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MmYxZDRhN2MtODVjZC1kZDRhLTg1OTgtYTI1MDk2NTAwYzRjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NjYyNjEwMDUtYjc0ZC0wNjRjLThlZTQtOTA0YzQ3MDI1ODI5IiBzdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NGUxMGI2NjEtNDU5NS1kZDRlLWI5YjAtODMwMmZmZmRiMDY4Ii8+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0i67Cw6rK9IiBwaG90b3Nob3A6TGF5ZXJUZXh0PSLrj4TrnoAgICDrj4TrnoAiLz4gPC9yZGY6QmFnPiA8L3Bob3Rvc2hvcDpUZXh0TGF5ZXJzPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94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"
        />
      </defs>
    </svg>
  );
};

export default Logo;
